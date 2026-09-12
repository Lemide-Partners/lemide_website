import { NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { auth } from "@/lib/auth";

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const form = await request.formData();
  const file = form.get("file") as File | null;
  if (!file) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  // 10 MB limit
  if (file.size > 10 * 1024 * 1024) {
    return NextResponse.json(
      { error: "File too large (max 10 MB)" },
      { status: 400 }
    );
  }

  const allowed = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/gif",
    "image/svg+xml",
  ];
  if (!allowed.includes(file.type)) {
    return NextResponse.json(
      { error: "File type not allowed" },
      { status: 400 }
    );
  }

  const blob = await put(file.name, file, {
    access: "public",
  });

  return NextResponse.json({ url: blob.url });
}
