"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils/tailwind-merge";
import { Trash, Trash2, X } from "lucide-react";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import { useLocale, useTranslations } from "next-intl";
import useDeleteDashboardProduct from "../_hooks/use-delete-dashboard-product";
import { toast } from "sonner";
import SubmittingErrorForm from "@/app/[locale]/(auth)/_components/submitting-error-form";

export function DeleteDashboardProductButton({ productId }: { productId: string }) {
  // Translation
  const t = useTranslations("dashboard.products");

  // States
  const [modalState, setModalState] = useState(false);

  // Hooks
  const {
    isPending,
    mutateAsync: deleteDashboardProduct,
    error,
  } = useDeleteDashboardProduct(productId);
  const locale = useLocale();

  // Functions
  const deleteHandler = async () => {
    try {
      await deleteDashboardProduct();

      setModalState(false);

      toast.success(t("modal.success-message"), {
        duration: 100000000000,
        className: cn(
          locale === "ar" ? "font-tajawal" : "font-inter",
          "font-semibold text-sm text-zinc-800 capitalize"
        ),
      });
    } catch {}
  };

  return (
    <Dialog open={modalState} onOpenChange={setModalState}>
      <form className="inline">
        {/* Delete trigger button  */}
        <DialogTrigger asChild>
          <Button
            variant={"secondary"}
            className={cn(locale === "ar" && "font-tajawal", "w-full md:w-fit")}
          >
            <Trash2 />
            {t("button.delete")}
          </Button>
        </DialogTrigger>

        {/* Modal content  */}
        <DialogContent
          className={cn(locale === "ar" && "font-tajawal", "w-fit")}
          aria-describedby=""
        >
          <section className="rounded-3xl flex flex-col gap-6">
            {/* Header */}
            <DialogClose asChild>
              <X className="text-[#2E2E30]/50 size-6 self-end" strokeWidth={1.5} />
            </DialogClose>

            {/* Content */}
            <div className="space-y-20">
              {/* Header */}
              <header className="flex flex-col gap-6 items-center">
                {/* Icon */}
                <span
                  className={cn(
                    "relative inline-flex items-center justify-center size-24 rounded-full bg-[#2E2E300D]/5",
                    // Ellipse 23
                    // "before:absolute before:top-1/2 before:left-1/2",
                    // "before:-translate-x-1/2 before:-translate-y-1/2",
                    // "before:size-24 before:rounded-full before:bg-[#2E2E300D]/5",
                    //Ellipse 24
                    "after:absolute after:top-1/2 after:left-1/2",
                    "after:-translate-x-1/2 after:-translate-y-1/2",
                    "after:size-16 after:rounded-full after:bg-[#2E2E3026]/15 after:z-10"
                  )}
                >
                  <Trash className="relative z-20 text-[#2E2E30] size-7" strokeWidth={2} />
                </span>
                <DialogTitle className="text-[#2E2E30] font-semibold text-xl normal-case">
                  {t("modal.confirm-message")}
                </DialogTitle>
              </header>

              <div className="space-y-2.5">
                {/* Error message  */}
                {error && <SubmittingErrorForm errorMsg={error.message} />}

                {/* Actions */}
                <footer className="gap-2 flex">
                  {/* Cancel */}
                  <DialogClose asChild>
                    <Button variant={"subtle"} className="w-full">
                      {t("modal.cancel")}
                    </Button>
                  </DialogClose>

                  {/* Confirm */}
                  <Button
                    variant={"destructive"}
                    className="w-full"
                    onClick={deleteHandler}
                    disabled={isPending}
                  >
                    {t("modal.confirm")}
                    {isPending && <Spinner />}
                  </Button>
                </footer>
              </div>
            </div>
          </section>
        </DialogContent>
      </form>
    </Dialog>
  );
}
