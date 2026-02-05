import { Translation } from "@/lib/types/global";
import z from "zod";

export const reviewSchema = (t: Translation) =>
  z.object({
    rating: z.number().max(5),
    title: z.string().nonempty(t("title-field")).min(3).max(20),
    comment: z.string().nonempty().max(200),
  });
