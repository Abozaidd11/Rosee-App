"use client";
import { useState } from "react";
import EmailStep from "./_components/email-step";
import NewPasswordStep from "./_components/new-password-step";
import OtpStep from "./_components/otp-step";

export default function ForgotPasswordForm() {
  const [step, setStep] = useState<"email" | "otp" | "new-password">("email");
  const [email, setEmail] = useState<string>("");

  return (
    <div className="w-full max-w-md px-6 flex flex-col">
      {/* email step */}
      {step === "email" && (
        <EmailStep email={email} setEmail={setEmail} onNext={() => setStep("otp")} />
      )}

      {/* otp step */}
      {step === "otp" && (
        <OtpStep
          email={email}
          onNext={() => setStep("new-password")}
          onBack={() => setStep("email")}
        />
      )}

      {/* new password step */}
      {step === "new-password" && <NewPasswordStep email={email} />}
    </div>
  );
}
