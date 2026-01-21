import { useMutation, useQueryClient } from "@tanstack/react-query";
import { markNotificationAsRead } from "@/lib/services/notifications-services/mark-notification-read.service";
import { TPaginatedNotifications, TMarkReadResponse } from "@/lib/types/notifications";

export default function useMarkNotificationRead() {
  const queryClient = useQueryClient();

  const { mutate: markRead } = useMutation({
    mutationFn: (ids: string[]) => markNotificationAsRead(ids),
    onMutate: async (ids: string[]) => {
      // cancel any outgoing refetches
      await queryClient.cancelQueries({ queryKey: ["notifications"] });

      // snapshot previous value
      const previousData = queryClient.getQueryData<{ pages: TPaginatedNotifications[] }>([
        "notifications",
      ]);

      // optimistically update
      queryClient.setQueryData<{ pages: TPaginatedNotifications[] }>(["notifications"], (old) => {
        if (!old) return old;

        return {
          ...old,
          pages: old.pages.map((page) => ({
            ...page,
            notifications: page.notifications.map((n) =>
              ids.includes(n._id) ? { ...n, isRead: true } : n
            ),
          })),
        };
      });

      return { previousData };
    },
    onError: (_err, _ids, context) => {
      if (context?.previousData) {
        queryClient.setQueryData(["notifications"], context.previousData);
      }
    },
    onSuccess: (data: TMarkReadResponse) => {
      queryClient.setQueryData<{ pages: TPaginatedNotifications[] }>(["notifications"], (old) => {
        if (!old) return old;

        return {
          ...old,
          pages: old.pages.map((page) => ({
            ...page,
            metadata: {
              ...page.metadata,
              unreadCount: data.unreadCount,
            },
          })),
        };
      });
    },
  });

  return { markRead };
}
