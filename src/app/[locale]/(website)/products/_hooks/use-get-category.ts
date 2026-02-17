import { useQuery } from "@tanstack/react-query";

export function useGetCategories() {
  const { data, isPending, error } = useQuery({
    queryKey: ["category"],
    queryFn: () => fetch("/api/todos").then((r) => r.json()),
  });
}
