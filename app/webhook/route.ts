import { NextRequest, NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  console.log("request = ", request);
  console.log("request data = ", data);

  return NextResponse.json({ message: data }, { status: 202 });
}
