import { TTestimonialsResponse } from "@/lib/types/testimonials";

export async function testimonialsServices() {
  const response = await fetch(`${process.env.API}/testimonials`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch the testimonials");
  }

  const payload: ApiResponse<TTestimonialsResponse> = await response.json();

  if ("error" in payload) {
    throw new Error(payload.error);
  }

  return payload;
}
