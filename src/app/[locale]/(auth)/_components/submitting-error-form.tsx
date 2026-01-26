import { CircleX } from "lucide-react";

export default function SubmittingErrorForm({ errorMsg }: { errorMsg: string }) {
  return (
    <div className="relative flex justify-center items-center gap-3 bg-red-50 dark:bg-red-900/20 p-3 border border-red-600 dark:border-red-400 rounded-lg text-red-600 dark:text-red-400">
      {/* Text */}
      <p className="font-sarabun text-sm">{errorMsg || "Something went wrong"}</p>
      {/* Icon */}
      <span className="-top-2 left-1/2 absolute -translate-x-1/2 transform">
        <CircleX
          className="bg-white dark:bg-zinc-700 rounded-full w-5 h-5 text-red-600 dark:text-red-400"
          strokeWidth={1.25}
        />
      </span>
    </div>
  );
}
