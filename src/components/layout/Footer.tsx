import { Link } from "react-router-dom";
import { Shield, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-4 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-brand-primary text-white">
                <span className="font-bold text-xl">KBH</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-brand-dark">
                KÊNH BẢO HIỂM
              </span>
            </Link>
            <p className="text-sm leading-6 text-slate-500">
              Kênh kết nối giải pháp bảo hiểm phù hợp cho cá nhân và gia đình. Minh bạch, dễ hiểu và đồng hành tận tâm.
            </p>
            <div className="flex space-x-6">
              {/* Social links placeholder */}
              <a href="#" className="text-slate-400 hover:text-brand-primary">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-3 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-brand-dark">Sản phẩm chính</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><Link to="/san-pham" className="text-sm leading-6 hover:text-brand-primary">Bảo hiểm Ô tô</Link></li>
                  <li><Link to="/san-pham" className="text-sm leading-6 hover:text-brand-primary">Bảo hiểm Xe máy</Link></li>
                  <li><Link to="/san-pham" className="text-sm leading-6 hover:text-brand-primary">Bảo hiểm Sức khỏe</Link></li>
                  <li><Link to="/san-pham" className="text-sm leading-6 hover:text-brand-primary">Bảo hiểm Du lịch</Link></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-brand-dark">Hỗ trợ khách hàng</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><Link to="/boi-thuong" className="text-sm leading-6 hover:text-brand-primary">Hướng dẫn bồi thường</Link></li>
                  <li><Link to="/tra-cuu" className="text-sm leading-6 hover:text-brand-primary">Tra cứu hợp đồng</Link></li>
                  <li><Link to="/cam-nang" className="text-sm leading-6 hover:text-brand-primary">Cẩm nang & FAQ</Link></li>
                  <li><Link to="/lien-he" className="text-sm leading-6 hover:text-brand-primary">Liên hệ hỗ trợ</Link></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-brand-dark">Liên hệ</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="flex gap-3 text-sm leading-6">
                    <Phone className="h-5 w-5 text-brand-primary shrink-0" />
                    <span>Hotline: <br/><strong className="text-brand-dark text-base">0912.660.869</strong></span>
                  </li>
                  <li className="flex gap-3 text-sm leading-6">
                    <Mail className="h-5 w-5 text-brand-primary shrink-0" />
                    <span>Email: <br/>phuongpp173@gmail.com</span>
                  </li>
                  <li className="flex gap-3 text-sm leading-6">
                    <MapPin className="h-5 w-5 text-brand-primary shrink-0" />
                    <span>Trực tuyến toàn quốc</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-slate-200 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-slate-500">&copy; {new Date().getFullYear()} Kênh Bảo Hiểm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
