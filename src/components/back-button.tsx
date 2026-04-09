import { ArrowLeft } from "lucide-react";
import NProgress from "nprogress";
import { useNavigate } from "react-router-dom";

export function BackButton() {
  const navigate = useNavigate();

  const canGoBack = window.history.length > 1;

  const handleBack = () => {
    if (canGoBack) {
      window.history.back();
    } else {
      NProgress.start();
      navigate("/");
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
