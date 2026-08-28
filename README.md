# Lemide Website

Business website for Lemide Partners.

## Stack

- **Framework:** Next.js 16 (App Router, TypeScript)
- **Database:** Neon (serverless Postgres)
- **ORM:** Drizzle
- **Auth:** NextAuth v5 (credentials)
- **File storage:** Vercel Blob
- **Hosting:** Vercel

## Getting Started

```bash
npm install
cp .env.local.example .env.local
# Fill in your real values in .env.local, then:
npm run dev
```

## Environment Variables

| Variable | Where to get it |
|---|---|
| `DATABASE_URL` | [Neon Console](https://console.neon.tech) — connection string with `?sslmode=require` |
| `AUTH_SECRET` | Generate with `openssl rand -base64 32` |
| `BLOB_READ_WRITE_TOKEN` | Vercel Dashboard > Storage > Blob |
| `AUTH_URL` | `http://localhost:3000` locally, your production URL on Vercel |

## Database

### Connect a fresh Neon database

1. Create a project at [console.neon.tech](https://console.neon.tech)
2. Copy the connection string into `DATABASE_URL` in `.env.local`
3. Run migrations and seed:

```bash
npm run db:migrate    # applies all migrations
npm run db:seed       # creates admin user + sample content
```

### Drizzle commands

| Command | What it does |
|---|---|
| `npm run db:generate` | Generate a new migration from schema changes |
| `npm run db:migrate` | Apply pending migrations to the database |
| `npm run db:push` | Push schema directly (skips migration files — dev only) |
| `npm run db:studio` | Open Drizzle Studio to browse data |
| `npm run db:seed` | Seed admin user and sample content |

### Workflow for schema changes

1. Edit `src/db/schema.ts`
2. `npm run db:generate` — creates a new SQL migration file
3. `npm run db:migrate` — applies it to Neon
4. Commit the migration file

## Default Admin Credentials

Set by the seed script — **change immediately** in production:

- Email: `admin@lemide.com`
- Password: `changeme123`

## Project Structure

```
src/
  app/
    (public)/          # Public-facing routes (blog, case studies, contact)
    admin/             # Protected admin routes
    api/
      auth/            # NextAuth API handler
      upload/          # Vercel Blob file upload endpoint
  db/
    index.ts           # Neon connection
    schema.ts          # Drizzle table definitions
    migrations/        # Generated SQL migrations
    seed.ts            # Seed script
  lib/
    auth.ts            # NextAuth configuration
    validations.ts     # Zod schemas for all inputs
    actions/
      blog.ts          # Blog article CRUD (Server Actions)
      case-studies.ts  # Case study CRUD (Server Actions)
      contacts.ts      # Contact form submit + admin actions
  middleware.ts        # Protects /admin routes
```
