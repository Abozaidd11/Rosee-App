import { TAllCategories } from "../types/category";

export async function getCategories({ limit, pageNumber }: { limit: number; pageNumber: number }) {
  // fetch data
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/categories?page=${pageNumber}&limit=${limit}`
  );

  // not success
  if (!res.ok) throw new Error("faild to fetch categories");

  // on success
  const data: ApiResponse<TAllCategories> = await res.json();

  // backend error
  if ("error" in data) throw new Error(data.error);

  return data;
}
