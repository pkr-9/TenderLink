// src/components/InnerPageLayout.tsx

import { Outlet } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const InnerPageLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        {/* pt-20 offsets the fixed h-20 header [cite: 132] */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
