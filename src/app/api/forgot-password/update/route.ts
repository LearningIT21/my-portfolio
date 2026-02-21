import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  return new NextResponse("Password update requires database setup", { status: 503 });
}
