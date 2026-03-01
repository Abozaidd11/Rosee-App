import { LoaderCircle } from "lucide-react";

export default function Loading() {
  return (
    <div className="px-4 w-full h-screen flex justify-center items-center">
      <LoaderCircle className="animate-spin text-primary" size={40} />
    </div>
  );
}
