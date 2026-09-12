"use server";

import { revalidatePath } from "next/cache";
import { eq, desc } from "drizzle-orm";
import slugify from "slugify";
import { db } from "@/db";
import { articles } from "@/db/schema";
import { articleSchema } from "@/lib/validations";
import { auth } from "@/lib/auth";

function makeSlug(title: string): string {
  return slugify(title, { lower: true, strict: true });
}

// ---- Public queries --------------------------------------------------------

export async function getPublishedArticles() {
  return db
    .select()
    .from(articles)
    .where(eq(articles.status, "published"))
    .orderBy(desc(articles.publishedAt));
}

export async function getArticleBySlug(slug: string) {
  const [article] = await db
    .select()
    .from(articles)
    .where(eq(articles.slug, slug))
    .limit(1);
  return article ?? null;
}

// ---- Admin queries ---------------------------------------------------------

export async function getAllArticles() {
  const session = await auth();
  if (!session?.user) throw new Error("Unauthorized");
  return db.select().from(articles).orderBy(desc(articles.createdAt));
}

export async function getArticleById(id: string) {
  const session = await auth();
  if (!session?.user) throw new Error("Unauthorized");
  const [article] = await db
    .select()
    .from(articles)
    .where(eq(articles.id, id))
    .limit(1);
  return article ?? null;
}

// ---- Admin mutations -------------------------------------------------------

export async function createArticle(formData: FormData) {
  const session = await auth();
  if (!session?.user) throw new Error("Unauthorized");

  const raw = Object.fromEntries(formData);
  const data = articleSchema.parse(raw);
  const slug = data.slug || makeSlug(data.title);
  const now = new Date();

  const [created] = await db
    .insert(articles)
    .values({
      title: data.title,
      slug,
      excerpt: data.excerpt || null,
      body: data.body,
      coverImageUrl: data.coverImageUrl || null,
      status: data.status,
      publishedAt: data.status === "published" ? now : null,
      updatedAt: now,
    })
    .returning();

  revalidatePath("/blog");
  revalidatePath("/admin/blog");
  return created;
}

export async function updateArticle(id: string, formData: FormData) {
  const session = await auth();
  if (!session?.user) throw new Error("Unauthorized");

  const raw = Object.fromEntries(formData);
  const data = articleSchema.parse(raw);
  const now = new Date();

  const existing = await getArticleById(id);
  if (!existing) throw new Error("Article not found");

  // Set publishedAt when transitioning from draft to published
  let publishedAt = existing.publishedAt;
  if (data.status === "published" && existing.status === "draft") {
    publishedAt = now;
  }

  const [updated] = await db
    .update(articles)
    .set({
      title: data.title,
      slug: data.slug || existing.slug,
      excerpt: data.excerpt || null,
      body: data.body,
      coverImageUrl: data.coverImageUrl || null,
      status: data.status,
      publishedAt,
      updatedAt: now,
    })
    .where(eq(articles.id, id))
    .returning();

  revalidatePath("/blog");
  revalidatePath(`/blog/${updated.slug}`);
  revalidatePath("/admin/blog");
  return updated;
}

export async function deleteArticle(id: string) {
  const session = await auth();
  if (!session?.user) throw new Error("Unauthorized");

  await db.delete(articles).where(eq(articles.id, id));

  revalidatePath("/blog");
  revalidatePath("/admin/blog");
}
