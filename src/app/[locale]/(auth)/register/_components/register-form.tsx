"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFormFields } from "@/lib/types/auth";
import { registerSchema } from "@/lib/schemas/auth.schema";
import useRegister from "../_hooks/use-register";
import { Label } from "@/components/ui/label";
import { PhoneInput } from "@/components/ui/phone-input";
import { Link } from "@/i18n/navigation";
import SubmittingErrorForm from "../../_components/submitting-error-form";
import { cn } from "@/lib/utils/tailwind-merge";
import { useTranslations } from "next-intl";

export default function RegisterForm() {
  // Translation
  const t = useTranslations("auth.register");

  // Mutation
  const { isPending, error, register } = useRegister();

  // Form
  const form = useForm<RegisterFormFields>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
      gender: "",
    },
    resolver: zodResolver(registerSchema),
  });

  // Functions
  const onSubmit: SubmitHandler<RegisterFormFields> = async (values) => {
    register(values);
  };

  return (
    // Form
    <section className="flex flex-col gap-5">
      {/* Header  */}
      <header className="pb-4 border-b border-b-zinc-200 font-greatVibes text-maroon-700 dark:text-softPink-300 text-5xl text-center">
        {t("header")}
      </header>

      {/* Form */}
      <Form {...form}>
        {/* Fields */}
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          id="register-form"
          className="flex flex-col justify-between"
        >
          {/*  Name  */}
          <div className="gap-5 grid grid-cols-2">
            {/* First name  */}
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  {/* Label */}
                  <Label> {t("name.first.title")}</Label>

                  {/* Input */}
                  <FormControl>
                    <Input
                      aria-invalid={!!form.formState.errors.firstName}
                      {...field}
                      placeholder={t("name.first.placeholder")}
                    />
                  </FormControl>

                  {/* Validation Message  */}
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Last name  */}
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  {/* Label */}
                  <Label> {t("name.last.title")}</Label>

                  {/* Input Field */}
                  <FormControl>
                    <Input
                      aria-invalid={!!form.formState.errors.lastName}
                      {...field}
                      placeholder={t("name.last.placeholder")}
                    />
                  </FormControl>

                  {/* Validation Message  */}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Email  */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                {/* Label */}
                <Label>{t("email.title")}</Label>

                {/* Input Field */}
                <FormControl>
                  <Input
                    aria-invalid={!!form.formState.errors.email}
                    type="email"
                    {...field}
                    placeholder={t("email.placeholder")}
                  />
                </FormControl>

                {/* Validation Message  */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone  */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                {/* Label */}
                <Label>{t("phone.title")}</Label>

                {/* Input Field */}
                <FormControl>
                  <div className="relative">
                    <PhoneInput
                      {...field}
                      aria-invalid={!!form.formState.errors.phone}
                      value={field.value}
                      onChange={field.onChange}
                      className="peer"
                      defaultCountry="EG"
                      initialValueFormat="national"
                      international
                    />
                    {/* Custom placeholder  */}
                    <span
                      className={cn(
                        "top-4 left-1/3 absolute text-zinc-500 text-sm",
                        field.value ? "hidden" : "block"
                      )}
                    >
                      {t("phone.placeholder")}
                    </span>
                  </div>
                </FormControl>

                {/* Validation Message  */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Gender  */}
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                {/* Label */}
                <FormLabel>{t("gender.title")}</FormLabel>

                {/* Gender  */}
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  aria-invalid={!!form.formState.errors.gender}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder={t("gender.placeholder")} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="male">{t("gender.options.male")}</SelectItem>
                    <SelectItem value="female">{t("gender.options.female")}</SelectItem>
                  </SelectContent>
                </Select>

                {/* Validation Message  */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password  */}
          <FormField
            aria-invalid={!!form.formState.errors.password}
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                {/* Label */}
                <Label>{t("password.title")}</Label>

                {/* Input Field */}
                <FormControl>
                  <Input
                    aria-invalid={!!form.formState.errors.password}
                    type="password"
                    placeholder={t("password.placeholder")}
                    {...field}
                  />
                </FormControl>
                {/* Validation Message  */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Confirm Password  */}
          <FormField
            aria-invalid={!!form.formState.errors.password}
            control={form.control}
            name="rePassword"
            render={({ field }) => (
              <FormItem>
                {/* Label */}
                <Label>{t("confirm-password.title")}</Label>

                {/* Input Field */}
                <FormControl>
                  <Input
                    aria-invalid={!!form.formState.errors.rePassword}
                    type="password"
                    placeholder={t("confirm-password.placeholder")}
                    {...field}
                  />
                </FormControl>

                {/* Validation Message  */}
                <FormMessage />
              </FormItem>
            )}
          />
        </form>

        {/* Button  */}
        <footer className="flex flex-col gap-2">
          {error && <SubmittingErrorForm errorMsg={error.message} />}
          <Button
            type="submit"
            form="register-form"
            className="rounded-xl capitalize"
            disabled={isPending || (!form.formState.isValid && form.formState.isSubmitted)}
          >
            {isPending ? `${t("button")} ...` : t("button")}
          </Button>
        </footer>

        {/* Create account */}
        <p className="pt-5 border-t border-t-zinc-200 font-medium text-zinc-800 dark:text-zinc-50 text-sm text-center">
          {t("user-question")}{" "}
          <Link
            href={"/login"}
            className="font-bold text-maroon-700 dark:text-softPink-300 text-sm capitalize"
          >
            {t("link")}
          </Link>
        </p>
      </Form>
    </section>
  );
}
