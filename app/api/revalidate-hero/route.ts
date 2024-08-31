import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
  revalidateTag("hero");

  return NextResponse.json({ revalidated: true });
}
