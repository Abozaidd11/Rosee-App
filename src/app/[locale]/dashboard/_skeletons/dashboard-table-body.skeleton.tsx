import { Skeleton } from "@/components/ui/skeleton";
import { API_DASHBOARD_PRODUCTS_LIMIT } from "@/lib/constants/global-constants";

export default function DashboardTableBodySkeleton() {
  return (
    <tbody className="font-normal text-sm">
      {Array.from({ length: API_DASHBOARD_PRODUCTS_LIMIT }).map((_, idx) => (
        <tr key={idx} className="border-b border-black/10">
          <td className="ps-5 h-14">
            <Skeleton className="h-4 w-32" />
          </td>

          <td>
            <Skeleton className="h-4 w-20" />
          </td>

          <td>
            <Skeleton className="h-4 w-24" />
          </td>

          <td>
            <Skeleton className="h-4 w-16" />
          </td>

          <td>
            <Skeleton className="h-4 w-24" />
          </td>

          <td className="text-center">
            <div className="flex justify-center gap-2">
              <Skeleton className="h-8 w-20 rounded-md" />
              <Skeleton className="h-8 w-20 rounded-md" />
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
