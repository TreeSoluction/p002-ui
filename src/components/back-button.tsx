"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import NProgress from "nprogress";
import { useEffect, useState } from "react";

export function BackButton() {
  const [canGoBack, setCanGoBack] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setCanGoBack(window.history.length > 1);
  }, []);

  const handleBack = () => {
    if (canGoBack) {
      window.history.back();
    } else {
      NProgress.start();
      router.push("/");
    }
  };

  return (
    <button
      onClick={handleBack}
      className="inline-flex cursor-pointer items-center gap-1 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition"
    >
      <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
      <span>Voltar</span>
    </button>
  );
}
