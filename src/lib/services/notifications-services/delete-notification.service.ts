// export async function deleteNotification(notificationId: string) {
//   const res = await fetch(`/api/notifications/delete-notification/${notificationId}`, {
//     method: "DELETE",
//   });

//   if (!res.ok) {
//     let errorMessage = "Failed to delete notification";

//     const errorData = await res.json();
//     errorMessage = errorData.message || errorMessage;

//     throw new Error(errorMessage);
//   }

//   const data = await res.json();
//   return data;
// }
