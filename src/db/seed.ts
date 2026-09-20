import "dotenv/config";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import bcrypt from "bcryptjs";
import * as schema from "./schema";

async function seed() {
  const sql = neon(process.env.DATABASE_URL!);
  const db = drizzle(sql, { schema });

  // Seed admin user — change these before running in production
  const email = "admin@lemide.com";
  const password = "changeme123";
  const hash = await bcrypt.hash(password, 12);

  await db
    .insert(schema.adminUsers)
    .values({
      email,
      passwordHash: hash,
      name: "Admin",
    })
    .onConflictDoNothing();

  console.log(`Seeded admin user: ${email} / ${password}`);

  // Seed a sample blog article
  await db
    .insert(schema.articles)
    .values({
      title: "Welcome to Lemide",
      slug: "welcome-to-lemide",
      excerpt: "Our very first blog post.",
      body: "# Welcome\n\nThis is a sample article to verify your setup is working. Feel free to edit or delete it from the admin panel.",
      status: "published",
      publishedAt: new Date(),
    })
    .onConflictDoNothing();

  console.log("Seeded sample article");

  // Seed a sample case study
  await db
    .insert(schema.caseStudies)
    .values({
      title: "Sample Case Study",
      slug: "sample-case-study",
      clientName: "Acme Corp",
      summary: "A demonstration case study.",
      body: "# Acme Corp Partnership\n\nThis is a sample case study. Replace it with a real one from the admin panel.",
      resultsMetrics: { "Revenue Growth": "42%", "Time Saved": "120 hours" },
      status: "published",
      publishedAt: new Date(),
    })
    .onConflictDoNothing();

  console.log("Seeded sample case study");
  console.log("Done!");
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
