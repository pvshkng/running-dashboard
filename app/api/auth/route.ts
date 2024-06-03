import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(/* request: Request */) {
  //const data = await request.json();

  const uri = process.env.DATASOURCE_BASEURI;

  const body = {
    username: process.env.DATASOURCE_LOGIN,
    password: process.env.DATASOURCE_PASSWORD,
  };
  console.log("body=", body);
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  const req = await fetch(uri + "/auth/login", options);
  const { item } = await req.json();

  console.log("request data = ", item);

  return NextResponse.json(item, { status: 200 });
}
