import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/footer";
import Header from "./components/header";
import ProgressIndicator from "./components/progress-indicator";
import "./index.css";
import { QueryProvider } from "./providers/query-client-provider";

export default function App() {
  return (
    <QueryProvider>
      <div className="flex flex-col min-h-screen overflow-x-hidden antialiased h-screen w-full">
        <Header />

        <Suspense fallback={null}>
          <ProgressIndicator />
        </Suspense>

        <main className="flex-1">
          <Outlet />
          <ReactQueryDevtools initialIsOpen={false} />
        </main>

        <Footer />
      </div>
    </QueryProvider>
  );
}
