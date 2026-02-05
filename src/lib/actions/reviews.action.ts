"use server";

export async function addReviewAction(fields: {
  product: string;
  rating: number;
  title: string;
  comment: string;
}) {
  const res = await fetch(`${process.env.API}/reviews`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(fields),
  });

  const payload = await res.json();

  console.log(payload);

  return payload;
}
