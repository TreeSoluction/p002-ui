import { Copyright } from "lucide-react";

export function Footer() {
  return (
    <div className="flex gap-1 items-center justify-center w-full text-xs sm:text-sm md:text-base text-center p-4 sm:p-6 mt-4 text-white bg-green-bg">
      DESENVOLVIDO POR{" "}
      <Copyright className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" /> SOLUTION
      TREE
    </div>
  );
}
