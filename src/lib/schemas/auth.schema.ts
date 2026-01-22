import { isValidPhoneNumber } from "react-phone-number-input";
import * as z from "zod";
import { Translation } from "../types/global";

export const registerSchema = (t: Translation) =>
  z
    .object({
      // First name
      firstName: z
        .string()
        .nonempty({ message: t("firstName.required") })
        .trim()
        .min(2, { message: t("firstName.min", { min: 2 }) })
        .max(20, { message: t("firstName.max", { max: 20 }) }),

      // Last name
      lastName: z
        .string()
        .nonempty({ message: t("lastName.required") })
        .trim()
        .min(2, { message: t("lastName.min", { min: 2 }) })
        .max(20, { message: t("lastName.max", { max: 20 }) }),

      // Email
      email: z
        .string()
        .nonempty({ message: t("email.required") })
        .trim()
        .email({ message: t("email.invalid") })
        .min(5, { message: t("email.tooShort") })
        .max(128, { message: t("email.tooLong") }),

      // Phone
      phone: z
        .string()
        .nonempty({ message: t("phone.required") })
        .refine(isValidPhoneNumber, { message: t("phone.invalid") }),

      // Gender
      gender: z.enum(["male", "female"], {
        message: t("gender.required"),
      }),

      // Password
      password: z
        .string()
        .nonempty({ message: t("password.required") })
        .trim()
        .min(8, { message: t("password.min", { min: 8 }) })
        .max(20, { message: t("password.max", { max: 20 }) })
        .regex(/[A-Z]/, { message: t("password.upper") })
        .regex(/[a-z]/, { message: t("password.lower") })
        .regex(/[0-9]/, { message: t("password.number") })
        .regex(/[!@#$%^&*()_\-+={[}\]|:;"'<,>.?]/, { message: t("password.special") }),

      // Confirm password
      rePassword: z.string().nonempty({ message: t("rePassword.required") }),
    })
    .refine((data) => data.password === data.rePassword, {
      message: t("password.mismatch"),
      path: ["rePassword"],
    });
