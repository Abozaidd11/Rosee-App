import { z } from "zod";
import { Translation } from "../types/global";

// verify otp scheme
export const verifyOtpSchema = (t: Translation) =>
  z.object({
    resetCode: z.string().refine((val) => val.length === 6, `${t("otp-required")}`),
  });
