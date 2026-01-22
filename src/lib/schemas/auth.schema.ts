import {
  // isPossiblePhoneNumber,
  isValidPhoneNumber,
} from "react-phone-number-input";
import * as z from "zod";

export const registerSchema = z
  .object({
    // First nam
    firstName: z
      .string()
      .nonempty({ message: "First name is required" })
      .trim()
      .min(2, { message: "First name must be at least 2 characters long" })
      .max(20, { message: "First name must be at most 20 characters long" }),

    // Last name
    lastName: z
      .string()
      .nonempty({ message: "Last name is required" })
      .trim()
      .min(2, { message: "Last name must be at least 2 characters long" })
      .max(20, { message: "Last name must be at most 20 characters long" }),

    // Email
    email: z
      .string()
      .trim()
      .toLowerCase()
      .nonempty({ message: "Email is required" })
      .and(
        z
          .email({
            message: "Please enter a valid email",
          })
          .min(5, "Email is too short !")
          .max(128, "Email is too long !")
      ),

    // Phone
    phone: z.string().nonempty({ message: "Phone number is required" }).refine(isValidPhoneNumber, {
      message: "Please enter a valid phone number",
    }),
    // .transform((val) => Number(val.replace(/\D+/g, "")))
    // Gender
    gender: z.enum(["male", "female"]),

    // Password
    password: z
      .string()
      .nonempty({ message: "Password is required" })
      .trim()
      .min(8, { message: "Password must be at least 8 characters long" })
      .max(20, { message: "Password must be at most 20 characters long" })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter",
      })
      .regex(/[0-9]/, { message: "Password must contain at least one number" })
      .regex(/[!@#$%^&*()_\-+={[}\]|:;"'<,>.?]/, {
        message: "Password must contain at least one special character",
      }),

    // Confirm password
    rePassword: z.string().nonempty({ message: "Confirm password is required" }),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Passwords do not match",
    path: ["rePassword"],
  });
