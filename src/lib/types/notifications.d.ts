// notification type
export type TNotification = {
  _id: string;
  recipient: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    photo: string;
  } | null;
  title: string;
  body: string;
  type: "order_status" | string;
  priority: "low" | "medium" | "high" | string;
  isRead: boolean;
  actionLink: string;
  relatedId: string | null;
  relatedModel: string | null;
  createdAt: string;
  updatedAt: string;
  expiresAt: string | null;
};

// paginated notifications type
export type TPaginatedNotifications = {
  message: string;
  metadata: {
    currentPage: number;
    totalPages: number;
    limit: number;
    totalItems: number;
    unreadCount: number;
  };
  notifications: TNotification[];
};

// mark notification as read type
export type TMarkReadResponse = {
  message: string;
  modifiedCount: number;
  unreadCount: number;
};
