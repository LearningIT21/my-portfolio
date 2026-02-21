import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  return new NextResponse("Token verification requires database setup", { status: 503 });
};
