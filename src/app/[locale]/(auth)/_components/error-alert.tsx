"use client";
import { ReactNode } from "react";
import { CircleX } from "lucide-react";
type ErrorAlertProps = {
  message: string | ReactNode;
};
export default function ErrorAlert({ message }: ErrorAlertProps) {
  return (
    <p
      className="relative bg-red-50 mt-2 px-4 py-3 border border-red-600 text-red-600 text-sm text-center"
      role="alert"
    >
      <span className="-top-3 left-1/2 absolute flex justify-center items-center -translate-x-1/2">
        <CircleX className="fill-white w-6 h-6 overflow-hidden text-red-600" />
      </span>
      {message}
    </p>
  );
}
