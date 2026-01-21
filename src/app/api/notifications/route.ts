import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  //   const token = await getToken({
  //   req,
  //   secret: process.env.NEXTAUTH_SECRET,
  //   secureCookie: process.env.NODE_ENV === "production",
  // });

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjdjMDYzOWQ4MzZlZThiZTcwNjE5MGE5Iiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzY5MDA3MDA2fQ.nNAkIB4AXgsa9xnsUUR58yf1wslKmt31IA5jyfa3Pis";
  if (!token) {
    return new Response("Unauthorized", {
      status: 401,
      statusText: "Unauthorized",
    });
  }

  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") || "1";
  const limit = searchParams.get("limit") || "10";

  const res = await fetch(process.env.API + `/notifications/admin?page=${page}&limit=${limit}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  return NextResponse.json(data, { status: res.status });
}
