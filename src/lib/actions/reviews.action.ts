"use server";

import { NextRequest } from "next/server";
import { checkToken } from "../utils/check-token";

export async function addReviewAction(
  fields: {
    product: string;
    rating: number;
    title: string;
    comment: string;
  },
  req: NextRequest
) {
  const accessToken = await checkToken(req);

  if (!accessToken) {
    throw new Error("You are not authorized");
  }

  const res = await fetch(`${process.env.API}/reviews`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "content-type": "application/json",
    },
    body: JSON.stringify(fields),
  });

  const payload = await res.json();

  return payload;
}
