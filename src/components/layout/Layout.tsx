import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Phone } from "lucide-react";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      
      {/* Sticky Mobile Hotline */}
      <div className="fixed bottom-4 right-4 z-50 md:hidden flex flex-col gap-2">
        <a 
          href="tel:0912660869" 
          className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-accent text-white shadow-lg hover:bg-brand-accent-hover active:scale-95 transition-transform"
        >
          <Phone className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
}
