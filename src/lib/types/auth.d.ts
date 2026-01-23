import z from "zod";
import { emailStepSchema, newPasswordSchems } from "../schemes/af-task-schema/auth.schema";

// Fields Types
export type EmailStepField = z.infer<ReturnType<typeof emailStepSchema>>;

export type NewPasswordFields = z.infer<ReturnType<typeof newPasswordSchems>>;

// Response Types
export type EmailStepResponse = {
  info: string;
};

export type NewPasswordResponse = {
  token: string;
};
