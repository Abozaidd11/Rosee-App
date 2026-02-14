"use client";
import OrderList from "@/components/features/orders/order-list";
import OrderCardSkeleton from "@/components/skeletons/orders/order-card-skeleton";
import useOrders from "@/hooks/orders/use-orders";

export default function OrdersPage() {
  const { data, isLoading, isError, error } = useOrders();

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-[1280px] mx-auto">
          <h1 className="text-5xl font-bold font-primary leading-none text-gray-800 mb-6">
            Orders
          </h1>
        </div>
        <div className="space-y-6">
          <OrderCardSkeleton />
          <OrderCardSkeleton />
          <OrderCardSkeleton />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-[146px] mx-auto">
          <h1 className="text-5xl font-bold font-primary leading-none text-gray-800 mb-6">
            Orders
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center py-6">
          <div className="text-red-500 mb-4">
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h2 className="text-lg font-semibold mb-2 text-gray-800">Failed to load orders</h2>
          <p className="text-gray-600 mb-4">
            {error?.message || "Something went wrong. Please try again later."}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="inline-block px-6 py-2 bg-[#A6252A] text-white rounded hover:bg-[#8B1F23] transition"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-[1280px] mx-auto">
        <h1 className="text-5xl font-bold font-primary leading-none text-gray-800 mb-6">Orders</h1>
      </div>
      <OrderList orders={data?.orders || []} />
    </div>
  );
}
