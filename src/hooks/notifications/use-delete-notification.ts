// import { deleteNotification } from "@/lib/services/notifications-services/delete-notification.service";
// import { TPaginatedNotifications } from "@/lib/types/notifications";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// export default function useDeleteNotification() {
//   const queryClient = useQueryClient();

//   const { mutate: deleteOneNotification } = useMutation({
//     mutationFn: (id: string) => deleteNotification(id),
//     onMutate: async (id: string) => {
//       // cancel any outgoing refetches
//       await queryClient.cancelQueries({ queryKey: ["notifications"] });

//       // snapshot previous value
//       const previousData = queryClient.getQueryData<{ pages: TPaginatedNotifications[] }>([
//         "notifications",
//       ]);

//       // optimistically update
//       queryClient.setQueryData<{ pages: TPaginatedNotifications[] }>(["notifications"], (old) => {
//         if (!old) return old;

//         return {
//           ...old,
//           pages: old.pages.map((page) => ({
//             ...page,
//             notifications: page.notifications.filter((n) => n._id !== id),
//           })),
//         };
//       });

//       return { previousData };
//     },
//     onError: (_err, _id, context) => {
//       if (context?.previousData) {
//         queryClient.setQueryData(["notifications"], context.previousData);
//       }
//     },
//   });

//   return { deleteOneNotification };
// }
