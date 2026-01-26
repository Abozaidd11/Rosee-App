import { useTranslations } from "next-intl";

export function useZodTranslation(namespace: string) {
  const t = useTranslations(namespace);

  return t;
}
