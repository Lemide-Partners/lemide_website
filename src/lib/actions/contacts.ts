"use server";

import { revalidatePath } from "next/cache";
import { eq, desc } from "drizzle-orm";
import { db } from "@/db";
import { contactSubmissions } from "@/db/schema";
import { contactSchema } from "@/lib/validations";
import { auth } from "@/lib/auth";

// ---- Public ----------------------------------------------------------------

export async function submitContactForm(formData: FormData) {
  const raw = Object.fromEntries(formData);
  const data = contactSchema.parse(raw);

  await db.insert(contactSubmissions).values({
    name: data.name,
    email: data.email,
    company: data.company || null,
    message: data.message,
  });

  revalidatePath("/admin/contacts");
  return { success: true };
}

// ---- Admin -----------------------------------------------------------------

export async function getContactSubmissions() {
  const session = await auth();
  if (!session?.user) throw new Error("Unauthorized");

  return db
    .select()
    .from(contactSubmissions)
    .orderBy(desc(contactSubmissions.createdAt));
}

export async function markContactAsRead(id: string) {
  const session = await auth();
  if (!session?.user) throw new Error("Unauthorized");

  await db
    .update(contactSubmissions)
    .set({ isRead: true })
    .where(eq(contactSubmissions.id, id));

  revalidatePath("/admin/contacts");
}

export async function markContactAsUnread(id: string) {
  const session = await auth();
  if (!session?.user) throw new Error("Unauthorized");

  await db
    .update(contactSubmissions)
    .set({ isRead: false })
    .where(eq(contactSubmissions.id, id));

  revalidatePath("/admin/contacts");
}

export async function deleteContactSubmission(id: string) {
  const session = await auth();
  if (!session?.user) throw new Error("Unauthorized");

  await db
    .delete(contactSubmissions)
    .where(eq(contactSubmissions.id, id));

  revalidatePath("/admin/contacts");
}
