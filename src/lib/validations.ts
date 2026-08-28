import { z } from "zod";

export const articleSchema = z.object({
  title: z.string().min(1).max(500),
  slug: z.string().min(1).max(500).optional(),
  excerpt: z.string().optional(),
  body: z.string().min(1),
  coverImageUrl: z.string().url().optional().or(z.literal("")),
  status: z.enum(["draft", "published"]).default("draft"),
});

export const caseStudySchema = z.object({
  title: z.string().min(1).max(500),
  slug: z.string().min(1).max(500).optional(),
  clientName: z.string().min(1).max(255),
  summary: z.string().optional(),
  body: z.string().min(1),
  coverImageUrl: z.string().url().optional().or(z.literal("")),
  galleryImages: z.array(z.string().url()).optional(),
  resultsMetrics: z.record(z.string(), z.union([z.string(), z.number()])).optional(),
  status: z.enum(["draft", "published"]).default("draft"),
});

export const contactSchema = z.object({
  name: z.string().min(1).max(255),
  email: z.string().email().max(255),
  company: z.string().max(255).optional(),
  message: z.string().min(1).max(5000),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});
