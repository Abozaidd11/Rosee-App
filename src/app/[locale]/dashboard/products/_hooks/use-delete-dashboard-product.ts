import { useMutation } from "@tanstack/react-query";
import { deleteDashboardProductAction } from "../_actions/delete-dashboard-product";

export default function useDeleteDashboardProduct(productId: string) {
  const { isPending, error, mutateAsync } = useMutation({
    mutationKey: ["dashboard-product", productId],
    mutationFn: () => deleteDashboardProductAction(productId),
  });

  return { isPending, error, mutateAsync };
}
