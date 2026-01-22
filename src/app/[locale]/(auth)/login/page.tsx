import React from "react";
import { LoginForm } from "./_components/login-form";
export default function page() {
  return (
    <section className="space-y-6  ">
      {/* welcome message */}
      <p className="w-full pb-4 border-b dark:border-zinc-600  text-center text-5xl text-maroon-700 dark:text-softPink-300 font-edwardianscriptitc">
        Welcome back!
      </p>

      {/* Login form component */}
      <LoginForm />
    </section>
  );
}
