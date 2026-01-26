import { loginSchema } from "@/lib/schemes/login";
import { useMutation } from "@tanstack/react-query";
import z from "zod";
import { signIn } from "next-auth/react";

/**
 * Custom hook to handle user login using NextAuth and React Query
 * @returns {Object} - Contains isPending, error, and login mutation function
 */
export default function useLogin() {
  // Initialize mutation using React Query
  const { isPending, error, mutate } = useMutation({
    // Mutation function to perform login
    mutationFn: async (credentiols: z.infer<ReturnType<typeof loginSchema>>) => {
      // Call NextAuth's signIn method with 'login' credentials provider
      const res = await signIn("login", { ...credentiols, redirect: false });

      // Throw an error if login fails
      if (res?.error) throw new Error(res.error);

      return res;
    },

    // Success callback after successful login
    onSuccess: async () => {
      const lang = location.pathname.split("/")[1];
      // Retrieve callback URL from query parameters, fallback to '/product'
      const callbackUrl = new URLSearchParams(location.search).get("callbackurl") || "/product";

      // Redirect the user to the callback URL
      location.replace(`/${lang}${callbackUrl}`);
    },
  });

  // Return useful state and login mutation function to be used in components
  return { isPending, error, login: mutate };
}
