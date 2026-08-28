"use server";

import { revalidatePath } from "next/cache";
import { eq, desc } from "drizzle-orm";
import slugify from "slugify";
import { db } from "@/db";
import { caseStudies } from "@/db/schema";
import { caseStudySchema } from "@/lib/validations";
import { auth } from "@/lib/auth";

function makeSlug(title: string): string {
  return slugify(title, { lower: true, strict: true });
}

// ---- Public queries --------------------------------------------------------

export async function getPublishedCaseStudies() {
  return db
    .select()
    .from(caseStudies)
    .where(eq(caseStudies.status, "published"))
    .orderBy(desc(caseStudies.publishedAt));
}

export async function getCaseStudyBySlug(slug: string) {
  const [study] = await db
    .select()
    .from(caseStudies)
    .where(eq(caseStudies.slug, slug))
    .limit(1);
  return study ?? null;
}

// ---- Admin queries ---------------------------------------------------------

export async function getAllCaseStudies() {
  const session = await auth();
  if (!session?.user) throw new Error("Unauthorized");
  return db.select().from(caseStudies).orderBy(desc(caseStudies.createdAt));
}

export async function getCaseStudyById(id: string) {
  const session = await auth();
  if (!session?.user) throw new Error("Unauthorized");
  const [study] = await db
    .select()
    .from(caseStudies)
    .where(eq(caseStudies.id, id))
    .limit(1);
  return study ?? null;
}

// ---- Admin mutations -------------------------------------------------------

export async function createCaseStudy(formData: FormData) {
  const session = await auth();
  if (!session?.user) throw new Error("Unauthorized");

  const raw = Object.fromEntries(formData);

  // Parse JSON fields that arrive as strings from FormData
  const parsed = {
    ...raw,
    galleryImages: raw.galleryImages
      ? JSON.parse(raw.galleryImages as string)
      : [],
    resultsMetrics: raw.resultsMetrics
      ? JSON.parse(raw.resultsMetrics as string)
      : undefined,
  };

  const data = caseStudySchema.parse(parsed);
  const slug = data.slug || makeSlug(data.title);
  const now = new Date();

  const [created] = await db
    .insert(caseStudies)
    .values({
      title: data.title,
      slug,
      clientName: data.clientName,
      summary: data.summary || null,
      body: data.body,
      coverImageUrl: data.coverImageUrl || null,
      galleryImages: data.galleryImages || [],
      resultsMetrics: (data.resultsMetrics as Record<string, string | number>) || null,
      status: data.status,
      publishedAt: data.status === "published" ? now : null,
      updatedAt: now,
    })
    .returning();

  revalidatePath("/case-studies");
  revalidatePath("/admin/case-studies");
  return created;
}

export async function updateCaseStudy(id: string, formData: FormData) {
  const session = await auth();
  if (!session?.user) throw new Error("Unauthorized");

  const raw = Object.fromEntries(formData);
  const parsed = {
    ...raw,
    galleryImages: raw.galleryImages
      ? JSON.parse(raw.galleryImages as string)
      : undefined,
    resultsMetrics: raw.resultsMetrics
      ? JSON.parse(raw.resultsMetrics as string)
      : undefined,
  };

  const data = caseStudySchema.parse(parsed);
  const now = new Date();

  const existing = await getCaseStudyById(id);
  if (!existing) throw new Error("Case study not found");

  let publishedAt = existing.publishedAt;
  if (data.status === "published" && existing.status === "draft") {
    publishedAt = now;
  }

  const [updated] = await db
    .update(caseStudies)
    .set({
      title: data.title,
      slug: data.slug || existing.slug,
      clientName: data.clientName,
      summary: data.summary || null,
      body: data.body,
      coverImageUrl: data.coverImageUrl || null,
      galleryImages: data.galleryImages || existing.galleryImages,
      resultsMetrics: (data.resultsMetrics as Record<string, string | number>) || existing.resultsMetrics,
      status: data.status,
      publishedAt,
      updatedAt: now,
    })
    .where(eq(caseStudies.id, id))
    .returning();

  revalidatePath("/case-studies");
  revalidatePath(`/case-studies/${updated.slug}`);
  revalidatePath("/admin/case-studies");
  return updated;
}

export async function deleteCaseStudy(id: string) {
  const session = await auth();
  if (!session?.user) throw new Error("Unauthorized");

  await db.delete(caseStudies).where(eq(caseStudies.id, id));

  revalidatePath("/case-studies");
  revalidatePath("/admin/case-studies");
}
