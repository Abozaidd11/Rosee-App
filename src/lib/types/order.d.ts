// src/lib/types/order.d.ts
// Type definitions for user orders

export interface OrderItem {
  product: {
    _id: string;
    title: string;
    slug: string;
    description: string;
    imgCover: string;
    images: string[];
    price: number;
    priceAfterDiscount: number;
    quantity: number;
    category: string;
    occasion: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    isSuperAdmin: boolean;
    sold: number;
    rateAvg: number;
    rateCount: number;
    id: string;
  };
  quantity: number;
  price: number;
  _id: string;
}

export interface Order {
  _id: string;
  user: string;
  orderItems: OrderItem[];
  totalPrice: number;
  paymentType: "cash" | "card";
  isPaid: boolean;
  isDelivered: boolean;
  state: "pending" | "processing" | "delivered" | "cancelled";
  createdAt: string;
  updatedAt: string;
  orderNumber: string;
  __v: number;
}

export type OrdersResponse = {
  message: string;
  metadata: {
    currentPage: number;
    totalPages: number;
    limit: number;
    totalItems: number;
  };
  orders: Order[];
};
