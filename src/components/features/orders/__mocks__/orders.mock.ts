// src/components/features/orders/__mocks__/orders.mock.ts
import { Order } from "@/lib/types/order";

export const ordersMock: Order[] = [
  {
    id: "12345",
    status: "in_progress",
    createdAt: "2025-07-14T10:05:00Z",
    total: 1820,
    paymentStatus: "paid",
    paymentMethod: "cash",
    deliveryStatus: "pending",
    products: [
      {
        id: "p1",
        name: "Moko Chocolate Set | Esperance Rose",
        image: "/assets/images/occasion-1.png",
        price: 1800,
        quantity: 2,
      },
      {
        id: "p2",
        name: "Chocolate Box",
        image: "/assets/images/occasion-2.png",
        price: 150,
        quantity: 1,
      },
      {
        id: "p3",
        name: "Red Roses Bouquet",
        image: "/assets/images/occasion-3.png",
        price: 200,
        quantity: 1,
      },
      {
        id: "p4",
        name: "Chocolate Box",
        image: "/assets/images/promo-card.png",
        price: 150,
        quantity: 1,
      },
    ],
  },
  {
    id: "12346",
    status: "cancelled",
    createdAt: "2025-07-13T13:36:00Z",
    total: 1820,
    paymentStatus: "not_paid",
    paymentMethod: "cash",
    deliveryStatus: "cancelled",
    products: [
      {
        id: "p1",
        name: "Moko Chocolate Set | Esperance Rose",
        image: "/assets/images/occasion-1.png",
        price: 1800,
        quantity: 2,
      },
      {
        id: "p2",
        name: "Chocolate Box",
        image: "/assets/images/occasion-2.png",
        price: 150,
        quantity: 1,
      },
    ],
  },
  {
    id: "12347",
    status: "done",
    createdAt: "2025-07-13T12:36:00Z",
    total: 1820,
    paymentStatus: "paid",
    paymentMethod: "credit_card",
    deliveryStatus: "delivered",
    products: [
      {
        id: "p1",
        name: "Moko Chocolate Set | Esperance Rose",
        image: "/assets/images/occasion-1.png",
        price: 1800,
        quantity: 2,
      },
      {
        id: "p2",
        name: "Chocolate Box",
        image: "/assets/images/occasion-2.png",
        price: 150,
        quantity: 1,
      },
    ],
  },
];
