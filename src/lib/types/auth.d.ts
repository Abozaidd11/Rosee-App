import { registerSchema } from "@/lib/schemas/auth.schema";
import { User } from "next-auth";

export type RegisterFormFields = z.infer<typeof registerSchema>;

export type RegisterResponse = {
  token: string;
  user: User["user"];
};
