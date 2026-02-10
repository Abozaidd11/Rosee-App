"use server";

export async function addReviewAction(
  fields: {
    product: string;
    rating: number;
    title: string;
    comment: string;
  },
  userToken: string | null
) {
  let accessToken;

  if (!userToken) {
    accessToken = "";
  } else {
    accessToken = userToken;
  }

  if (!accessToken) {
    return { error: "Unauthorized: No access token found." };
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
