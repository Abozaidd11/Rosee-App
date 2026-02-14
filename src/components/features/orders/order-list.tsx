// src/components/features/orders/order-list.tsx
import { Order } from "@/lib/types/order";
import OrderCard from "./order-card";
import { useTranslations } from "next-intl";

interface OrderListProps {
  orders: Order[];
}

export default function OrderList({ orders }: OrderListProps) {
  const t = useTranslations("orders");

  if (!orders.length) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <h2 className="text-lg font-semibold mb-2 text-primary">{t("no-orders")}</h2>
        <p className="text-muted-foreground mb-4">{t("no-orders-desc")}</p>
        <a
          href="/"
          className="inline-block px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition"
        >
          {t("go-home")}
        </a>
      </div>
    );
  }
  return (
    <div className="space-y-6">
      {orders.map((order) => (
        <OrderCard key={order._id} order={order} />
      ))}
    </div>
  );
}
