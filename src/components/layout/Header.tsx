import { Link, useLocation } from "react-router-dom";
import { Phone, Shield, Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";
import { cn } from "../../lib/utils";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Trang chủ", href: "/" },
    { name: "Sản phẩm", href: "/san-pham" },
    { name: "Bồi thường", href: "/boi-thuong" },
    { name: "Tra cứu", href: "/tra-cuu" },
    { name: "Cẩm nang", href: "/cam-nang" },
    { name: "Giới thiệu", href: "/gioi-thieu" },
  ];

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-brand-primary text-white">
              <span className="font-bold text-xl">KBH</span>
            </div>
            <span className="hidden sm:inline font-bold text-brand-dark text-lg tracking-tight">
              KÊNH BẢO HIỂM
            </span>
          </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "transition-colors hover:text-brand-primary",
                location.pathname === item.href ? "text-brand-primary" : ""
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-6">
          <div className="text-right">
            <p className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">Hotline 24/7</p>
            <p className="text-brand-primary-light font-bold leading-tight">0912 660 869</p>
          </div>
          <Link to="/lien-he" className="inline-flex items-center justify-center h-10 px-4 py-2 bg-brand-accent text-white rounded-lg font-semibold text-sm hover:bg-brand-accent-hover transition-colors shadow-sm">
            Nhận tư vấn
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-slate-600"

          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "block px-2 text-base font-medium",
                  location.pathname === item.href ? "text-brand-primary" : "text-slate-600"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="border-t border-slate-100 pt-4 flex flex-col gap-3">
            <a href="tel:0912660869" className="flex w-full items-center justify-center gap-2 rounded-lg border border-brand-primary py-2 text-brand-primary font-medium">
              <Phone className="h-4 w-4" />
              0912.660.869
            </a>
            <Link to="/lien-he" className="inline-flex w-full items-center justify-center h-10 px-4 py-2 rounded-lg bg-brand-accent text-white hover:bg-brand-accent-hover transition-colors text-sm font-medium">
              Nhận tư vấn
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
