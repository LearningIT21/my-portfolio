import { NextResponse } from "next/server";

export async function POST(request: any) {
  return new NextResponse("User registration requires database setup", { status: 503 });
}
