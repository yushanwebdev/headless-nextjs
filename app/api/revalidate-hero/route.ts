import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST() {
  revalidateTag("hero");

  return NextResponse.json({ revalidated: true });
}
