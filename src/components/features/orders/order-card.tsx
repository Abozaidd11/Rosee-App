// src/components/features/orders/order-card.tsx
"use client";
import { Order } from "@/lib/types/order";
import { useState } from "react";
import Image from "next/image";
import { ChevronDown, Banknote } from "lucide-react";
import { useFormatter, useTranslations } from "next-intl";

interface OrderCardProps {
  order: Order;
}

// Status maps will use translations dynamically in component

export default function OrderCard({ order }: OrderCardProps) {
  // Translation
  const t = useTranslations("orders");
  const format = useFormatter();

  // State
  const [showAll, setShowAll] = useState(false);

  // Variables
  const maxProducts = 4;
  const previewCount = 2;

  // Functions
  const formatPrice = (value: number) => format.number(value);
  const formatRating = (value?: number) =>
    format.number(value ?? 0, { minimumFractionDigits: 1, maximumFractionDigits: 1 });

  const getStatusLabel = (state: string) => {
    const statusMap: { [key: string]: { label: string; key: string; color: string } } = {
      pending: { label: t("pending"), key: "pending", color: "bg-yellow-500" },
      processing: { label: t("processing"), key: "processing", color: "bg-blue-500" },
      delivered: { label: t("delivered"), key: "delivered", color: "bg-green-500" },
      cancelled: { label: t("cancelled"), key: "cancelled", color: "bg-red-500" },
    };
    return statusMap[state] || { label: state, key: state, color: "bg-gray-400" };
  };

  // Variables
  const status = getStatusLabel(order.state);

  const paymentStatus = order.isPaid
    ? { label: t("paid"), color: "bg-emerald-500" }
    : { label: t("not-paid"), color: "bg-red-500" };

  const deliveryStatus = order.isDelivered
    ? { label: t("delivered"), color: "text-green-600" }
    : { label: t("pending"), color: "text-yellow-600" };

  const orderItems = order.orderItems || [];

  const showToggle = orderItems.length > previewCount;

  const formattedCreatedAt = order.createdAt
    ? format.dateTime(new Date(order.createdAt), {
        dateStyle: "medium",
        timeStyle: "short",
      })
    : "N/A";

  return (
    <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md bg-white max-w-[1280px] mx-auto">
      {/* Header */}
      <div className="bg-[#A6252A] text-white flex items-center justify-between px-4 h-14">
        <div className="text-2xl font-semibold font-primary leading-none">
          {t("order-header")} {order.orderNumber || `#${order._id}` || "N/A"}
        </div>
        <div className="text-base font-normal font-primary leading-none">
          {t("created-in")} {formattedCreatedAt}
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pt-4 pb-6 bg-gray-50 border-t border-gray-200">
        {/* Total + Payment */}
        <div className="flex items-center justify-between pb-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-medium font-primary leading-none text-gray-900">
              {t("total-price")} {formatPrice(order.totalPrice || 0)} EGP
            </span>
            <span
              className={`px-3 py-1 rounded-full text-white font-primary font-semibold text-base leading-none ${paymentStatus.color}`}
            >
              {paymentStatus.label}
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <span className="font-semibold text-base font-primary leading-none text-black">
              {t("status")}:
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
              {t("payment-method")}
            </span>
            <div className="flex items-center gap-2">
              <Banknote className="h-5 w-5" style={{ color: "#71717A" }} />
              <span
                className="font-primary font-semibold text-[16px] leading-none"
                style={{ color: "#71717A" }}
              >
                {order.paymentType === "cash" ? t("cash") : t("credit-card")}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-700">{t("delivery-status")}</span>
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
          <div className="font-semibold mb-4 text-gray-800">{t("order-items")}</div>

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
                              {t("rating")} {formatRating(item.product?.rateAvg)}/5
                            </span>
                            <span className="text-sm text-blue-600">
                              ({format.number(item.product?.rateCount || 0)} rating
                              {item.product?.rateCount === 1 ? "" : "s"})
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-red-500 font-medium">
                            (×{item.quantity || 1})
                          </span>
                          <span className="font-bold text-lg text-gray-900">
                            {formatPrice(item.price || 0)} <span className="text-base">EGP</span>
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
                              {t("rating")} {formatRating(item.product?.rateAvg)}/5
                            </span>
                            <span className="text-sm text-blue-600">
                              ({format.number(item.product?.rateCount || 0)} rating
                              {item.product?.rateCount === 1 ? "" : "s"})
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-red-500 font-medium">
                            (×{item.quantity || 1})
                          </span>
                          <span className="font-bold text-lg text-gray-900">
                            {formatPrice(item.price || 0)} <span className="text-base">EGP</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              {!showAll && showToggle && (
                <div className="absolute inset-x-0 bottom-0 flex justify-center pt-4 pb-4 bg-gradient-to-t from-white to-transparent">
                  <button
                    onClick={() => setShowAll(true)}
                    className="text-[#A6252A] text-base font-medium leading-none flex flex-col items-center hover:opacity-70 transition-opacity"
                  >
                    <span>{t("show-all")}</span>
                    <ChevronDown className="h-6 w-6 text-[#A6252A] mt-1" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {showToggle && showAll && (
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => setShowAll((s: boolean) => !s)}
                className="text-[#A6252A] text-base font-medium leading-none hover:underline flex items-center gap-2"
              >
                {showAll ? (
                  <>
                    {t("show-less")}
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
                    {t("show-all")}
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
