import { LoaderCircle } from "lucide-react";

export default function Loading() {
  return (
    <div className="px-4 w-full h-full flex justify-center items-center">
      <LoaderCircle className="animate-spin text-zinc-800 dark:text-zinc-400" size={40} />
    </div>
  );
}
