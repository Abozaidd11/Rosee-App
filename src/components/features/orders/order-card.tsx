// src/components/features/orders/order-card.tsx
"use client";
import { Order } from "@/lib/types/order";
import { useState } from "react";
import Image from "next/image";
import { ChevronDown, Banknote } from "lucide-react";

interface OrderCardProps {
  order: Order;
}

const statusMap = {
  pending: { label: "Pending", color: "bg-yellow-500" },
  processing: { label: "Processing", color: "bg-blue-500" },
  delivered: { label: "Delivered", color: "bg-green-500" },
  cancelled: { label: "Cancelled", color: "bg-red-500" },
};

const paymentStatusMap = {
  paid: { label: "Paid", color: "bg-emerald-500" },
  not_paid: { label: "Not Paid", color: "bg-red-500" },
};

const deliveryStatusMap = {
  pending: { label: "Pending", color: "text-yellow-600" },
  delivered: { label: "Delivered", color: "text-green-600" },
  cancelled: { label: "Cancelled", color: "text-red-600" },
};

export default function OrderCard({ order }: OrderCardProps) {
  const [showAll, setShowAll] = useState(false);
  const maxProducts = 4;
  const previewCount = 2;

  const status = statusMap[order.state as keyof typeof statusMap] || {
    label: order.state,
    color: "bg-gray-400",
  };

  const paymentStatus = order.isPaid ? paymentStatusMap.paid : paymentStatusMap.not_paid;

  const deliveryStatus = order.isDelivered
    ? deliveryStatusMap.delivered
    : deliveryStatusMap.pending;

  const orderItems = order.orderItems || [];

  const showToggle = orderItems.length > previewCount;

  return (
    <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md bg-white max-w-[1280px] mx-auto">
      {/* Header */}
      <div className="bg-[#A6252A] text-white flex items-center justify-between px-4 h-14">
        <div className="text-2xl font-semibold font-primary leading-none">
          Order {order.orderNumber || `#${order._id}` || "N/A"}
        </div>
        <div className="text-base font-normal font-primary leading-none">
          Created in:{" "}
          {(() => {
            if (!order.createdAt) return "N/A";
            const d = new Date(order.createdAt);
            const day = d.getDate();
            const month = d.toLocaleString("en-US", { month: "long" });
            const year = d.getFullYear();
            const time = d.toLocaleString("en-US", {
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            });
            return `${day} ${month}, ${year} at ${time}`;
          })()}
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pt-4 pb-6 bg-gray-50 border-t border-gray-200">
        {/* Total + Payment */}
        <div className="flex items-center justify-between pb-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-medium font-primary leading-none text-gray-900">
              Total Price: {(order.totalPrice || 0).toLocaleString()} EGP
            </span>
            <span
              className={`px-3 py-1 rounded-full text-white font-primary font-semibold text-base leading-none ${paymentStatus.color}`}
            >
              {paymentStatus.label}
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <span className="font-semibold text-base font-primary leading-none text-black">
              Status:
            </span>
            <span
              className={`px-3 py-1 rounded-full text-white font-primary font-semibold text-base leading-none ${status.color}`}
            >
              {status.label}
            </span>
          </div>
        </div>

        <div className="h-px w-full bg-gray-200 mb-4" />

        {/* Payment + Delivery */}
        <div className="mb-6 text-sm space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-medium" style={{ color: "#71717A" }}>
              Payment Method:
            </span>
            <div className="flex items-center gap-2">
              <Banknote className="h-5 w-5" style={{ color: "#71717A" }} />
              <span
                className="font-primary font-semibold text-[16px] leading-none"
                style={{ color: "#71717A" }}
              >
                {order.paymentType === "cash" ? "Cash" : "Credit Card"}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-700">Delivery Status:</span>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0h-.01M15 17a2 2 0 104 0m-4 0h-.01M9 17h6"
                />
              </svg>
              <span className="font-primary font-semibold text-[16px] leading-none">
                <span className={deliveryStatus.color}>{deliveryStatus.label}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Products */}
        <div>
          <div className="font-semibold mb-4 text-gray-800">Order Items:</div>

          <div className="bg-white rounded-xl p-5">
            <div
              className={`relative ${
                !showAll && showToggle ? "max-h-[240px] overflow-hidden" : ""
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {(showAll ? orderItems : orderItems.slice(0, maxProducts))
                  .slice(0, previewCount)
                  .map((item, index) => (
                    <div
                      key={`${item.product._id}-preview-${index}`}
                      className="flex gap-0 items-stretch pr-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden min-h-[150px]"
                      style={{ backgroundColor: "#FAFAFA" }}
                    >
                      <div className="relative w-[120px] min-h-full flex-shrink-0">
                        <Image
                          src={item.product?.imgCover || "/placeholder.png"}
                          alt={item.product?.title || "Product"}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1 flex flex-col justify-between min-w-0 pl-4 pt-1 pb-3">
                        <div className="space-y-1">
                          <h3 className="font-semibold text-[#8B1538] text-base line-clamp-2">
                            {item.product?.title || "Product"}
                          </h3>
                          <div className="flex items-center gap-1.5">
                            <span className="text-yellow-500 text-lg">★</span>
                            <span className="text-sm font-medium text-gray-700">
                              Rating: {item.product?.rateAvg?.toFixed(1) || "0.0"}/5
                            </span>
                            <span className="text-sm text-blue-600">
                              ({item.product?.rateCount || 0} rating
                              {item.product?.rateCount === 1 ? "" : "s"})
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-red-500 font-medium">
                            (×{item.quantity || 1})
                          </span>
                          <span className="font-bold text-lg text-gray-900">
                            {(item.price || 0).toLocaleString()}{" "}
                            <span className="text-base">EGP</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}

                {(showAll ? orderItems : orderItems.slice(0, maxProducts))
                  .slice(previewCount)
                  .map((item, index) => (
                    <div
                      key={`${item.product._id}-fade-${index}`}
                      className="flex gap-0 items-stretch pr-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden min-h-[150px]"
                      style={{
                        backgroundColor: "#FAFAFA",
                        opacity: showAll || !showToggle ? 1 : 0.5,
                      }}
                    >
                      <div className="relative w-[120px] min-h-full flex-shrink-0">
                        <Image
                          src={item.product?.imgCover || "/placeholder.png"}
                          alt={item.product?.title || "Product"}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1 flex flex-col justify-between min-w-0 pl-4 pt-1 pb-3">
                        <div className="space-y-1">
                          <h3 className="font-semibold text-[#8B1538] text-base line-clamp-2">
                            {item.product?.title || "Product"}
                          </h3>
                          <div className="flex items-center gap-1.5">
                            <span className="text-yellow-500 text-lg">★</span>
                            <span className="text-sm font-medium text-gray-700">
                              Rating: {item.product?.rateAvg?.toFixed(1) || "0.0"}/5
                            </span>
                            <span className="text-sm text-blue-600">
                              ({item.product?.rateCount || 0} rating
                              {item.product?.rateCount === 1 ? "" : "s"})
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-red-500 font-medium">
                            (×{item.quantity || 1})
                          </span>
                          <span className="font-bold text-lg text-gray-900">
                            {(item.price || 0).toLocaleString()}{" "}
                            <span className="text-base">EGP</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              {!showAll && showToggle && (
                <div
                  className="pointer-events-none absolute z-10 flex"
                  style={{ left: "567.5px", right: "567.5px", top: "197px" }}
                >
                  <button
                    onClick={() => setShowAll(true)}
                    className="pointer-events-auto w-[61px] text-center text-[#A6252A] text-base font-medium leading-none flex flex-col items-center"
                  >
                    <span>Show All</span>
                    <ChevronDown className="h-6 w-6 text-[#A6252A]" style={{ marginTop: "2px" }} />
                  </button>
                </div>
              )}
            </div>
          </div>

          {showToggle && showAll && (
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => setShowAll((s) => !s)}
                className="text-[#A6252A] text-base font-medium leading-none hover:underline flex items-center gap-2"
              >
                {showAll ? (
                  <>
                    Show Less
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  </>
                ) : (
                  <>
                    Show All
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
