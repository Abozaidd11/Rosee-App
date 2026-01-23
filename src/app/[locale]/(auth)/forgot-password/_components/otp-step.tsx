"use client";

import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { VerifyOtpFields } from "@/lib/types/auth-types/forgot-password";
import useVerifyOtp from "../_hooks/use-verify-otp";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { Form } from "@/components/ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { getOtpTimeLeft, startOtpTimer } from "../../_utils/otp-timer-presisted";
import { useEffect, useState } from "react";
import { verifyOtpSchema } from "@/lib/schemes/auth.schemes";
import { Link } from "@/i18n/navigation";
import ErrorAlert from "../../_components/error-alert";
import { cn } from "@/lib/utils/tailwind-merge";
import { useTranslations } from "next-intl";
import useSendOTP from "../_hooks/af-task/use-send-otp";

type StepOtpProps = {
  email: string;
  onNext: () => void;
  onBack: () => void;
};

export default function OtpStep({ email, onNext, onBack }: StepOtpProps) {
  //state
  const [timer, setTimer] = useState(getOtpTimeLeft || 0);

  // translation
  const t = useTranslations("forgot-password");

  // hooks
  const { verifyOtp, isVerifyPending, verifyError } = useVerifyOtp();
  const { isPending, error, sendOTP } = useSendOTP();

  // react hook form
  const form = useForm<VerifyOtpFields>({
    defaultValues: {
      resetCode: "",
    },
    resolver: zodResolver(verifyOtpSchema(t)),
  });

  // otp value
  const otpValue = form.watch("resetCode");
  const onSubmit = (data: VerifyOtpFields) => {
    verifyOtp(data, {
      onSuccess: () => {
        localStorage.removeItem("otp_time");
        onNext();
      },
      onError: (err) => {
        form.setError("resetCode", { message: err.message });
      },
    });
  };

  // auto send
  useEffect(() => {
    if (otpValue.length === 6) {
      verifyOtp(
        { resetCode: otpValue },
        {
          onSuccess: () => {
            localStorage.removeItem("otp_time");
          },
          onError: (err) => {
            form.setError("resetCode", { message: err.message });
          },
        }
      );
    } else {
      form.clearErrors("resetCode");
    }
  }, [otpValue]);

  // resend otp
  const handleResend = () => {
    if (!email) return;
    sendOTP(
      { email },
      {
        onSuccess: () => {
          startOtpTimer();
          setTimer(getOtpTimeLeft());
        },
      }
    );
  };

  // timer count down
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(getOtpTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-y-4 mb-9">
          <div className="space-y-1">
            <h2 className="font-semibold text-2xl text-zinc-800 dark:text-zinc-50">
              {t("otp-title")}
            </h2>
            <div className="flex items-center gap-1 border-b border-zinc-200 dark:border-zinc-700 pb-4">
              <p className="leading-none">
                {t.rich("otp-description", {
                  email: email ? email : "user@example.com.",
                  span: (chunk) => (
                    <span
                      onClick={() => onBack()}
                      className="text-blue-700 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition cursor-pointer active:scale-90 underline"
                    >
                      {chunk}
                    </span>
                  ),
                })}
              </p>
            </div>
          </div>

          {/* otp field */}
          <Controller
            name="resetCode"
            control={form.control}
            render={({ field }) => (
              <InputOTP maxLength={6} value={field.value} onChange={field.onChange}>
                <InputOTPGroup className="mt-4 w-full justify-center gap-x-3">
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <InputOTPSlot
                      key={i}
                      index={i}
                      className={cn(
                        form.formState.errors.resetCode && "border-red-500 ring-1 ring-red-500"
                      )}
                    />
                  ))}
                </InputOTPGroup>
              </InputOTP>
            )}
          />

          {/* timer */}
          <div className="w-full flex justify-end">
            <p className="text-zinc-700 dark:text-zinc-400 text-center text-sm mt-6">
              {timer > 0 ? (
                <>
                  {t.rich("otp-time-left", {
                    time: timer,
                    span: (chunk) => (
                      <span className="text-primary dark:text-primary font-medium">{chunk}</span>
                    ),
                  })}
                </>
              ) : (
                <button
                  type="button"
                  onClick={handleResend}
                  className="inline-flex items-center justify-end gap-1 text-end font-medium text-primary hover:text-maroon-800 dark:text-primary hover:dark:text-softPink-300 transition cursor-pointer active:scale-90"
                >
                  {isPending ? (
                    <>
                      {t("otp-resending")} <Loader2 className="animate-spin" />
                    </>
                  ) : (
                    <>{t("otp-resend")}</>
                  )}
                </button>
              )}
            </p>
          </div>

          {/* Form validation error */}
          {form.formState.errors.resetCode && (
            <ErrorAlert message={form.formState.errors.resetCode.message} />
          )}

          {/* Server error (only if no form error) */}
          {!form.formState.errors.resetCode && verifyError && (
            <ErrorAlert message={verifyError.message} />
          )}

          {/* Submit button */}
          <Button
            type="submit"
            disabled={isVerifyPending}
            className="w-full mt-4 flex items-center justify-center gap-x-2"
          >
            {isVerifyPending ? (
              <>
                {t("verifying-otp")} <Loader2 className="animate-spin" />
              </>
            ) : (
              <>{t("verify-otp")} </>
            )}
          </Button>
        </form>
      </Form>
      <div className="font-medium flex items-center justify-center gap-1 text-sm border-t border-t-zinc-200 dark:border-t-zinc-700 pt-5 w-full">
        <p className="font-medium text-zinc-800 dark:text-zinc-50 text-sm text-center">
          {t.rich("otp-need-help", {
            a: (chunk) => (
              <Link href={"#"} className="font-bold text-maroon-700 dark:text-softPink-300">
                {chunk}
              </Link>
            ),
          })}
        </p>
      </div>
    </section>
  );
}
