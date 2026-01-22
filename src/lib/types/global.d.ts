import { getTranslations } from "next-intl/server";

export type Translation = Awaited<ReturnType<typeof getTranslations>>;
