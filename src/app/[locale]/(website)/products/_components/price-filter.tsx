"use client";

import { Input } from "@/components/ui/input";
import ClearButton from "./clear-button";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Form } from "@/components/ui/form";

type FormValues = { 
    min?: number;
    max?: number 
};

export default function PriceFilter() {
    // Hooks
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();

    // Form
    const form = useForm<FormValues>({
        defaultValues: {
        min: Number(searchParams.get("price[gt]")) || undefined,
        max: Number(searchParams.get("price[lt]")) || undefined,
        },
    });
    
    // Form values
    const { register, handleSubmit, reset } = form;

  const updateUrl = (min?: number, max?: number) => {
    const params = new URLSearchParams(searchParams.toString());

    // remove old values first
    params.delete("price[gt]");
    params.delete("price[lt]");

    // set new values
    if (min) params.set("price[gt]", String(min));
    if (max) params.set("price[lt]", String(max)); 

    // build query string
    const query = params.toString().replace(/%5B/g, "[").replace(/%5D/g, "]");

    // push to url
    router.push(query ? `${pathname}?${query}` : pathname);
  };

  // Submit handler
  const onSubmit = (data: FormValues) => updateUrl(data.min, data.max);

  // Clear handler
  const clearPrices = () => {
    // reset form
    reset();
    // update url
    updateUrl();
  };

  return (
    <Form {...form}>
      <div
        className="border-b border-zinc-100 pb-5 pt-1 dark:border-zinc-700"
        onBlur={handleSubmit(onSubmit)}
      >
        <div className="flex items-center justify-between">
          {/* filter title */}
          <h3 className="ps-[5px] text-lg font-medium text-zinc-800 dark:text-zinc-50">
            Price
          </h3>
          {/* clear button */}
          <ClearButton onClick={clearPrices} />
        </div>
        <div className="flex items-center space-x-2 ps-1 pt-1">
          <div className="flex w-1/2 flex-col gap-2">
            {/* from label */}
            <Label htmlFor="min-price" className="lowercase">
              from
            </Label>
            <Input
              id="min-price"
              type="number"
              placeholder="0"
              {...register("min", { valueAsNumber: true })}
            />
          </div>
          <div className="flex w-1/2 flex-col gap-2">
            {/* from label */}
            <Label htmlFor="max-price" className="lowercase">
              to
            </Label>
            <Input
              id="max-price"
              type="number"
              placeholder="1000000"
              {...register("max", { valueAsNumber: true })}
            />
          </div>
        </div>
      </div>
    </Form>
  );
}
