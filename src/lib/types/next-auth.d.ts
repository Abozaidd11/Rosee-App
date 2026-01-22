import { User } from "next-auth";

declare module "next-auth" {
  /**
   * The shape of the user object returned in the OAuth providers' `profile` callback,
   * or the second parameter of the `session` callback, when using a database.
   */
  interface User {
    accsesToken: string;
    user: {
      _id: string;
      firstName: string;
      lastName: string;
      email: string;
      gender: "male" | "female" | string;
      phone: string;
      photo: string;
      role: "user" | "admin" | string;
      wishlist: [];
      addresses: [];
      createdAt: string;
    };
  }
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: User["user"];
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface JWT extends User {}
}
