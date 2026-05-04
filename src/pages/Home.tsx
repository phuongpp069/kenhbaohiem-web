import { Shield, Car, Heart, Plane, Search, CheckCircle, FileText, ArrowRight, ArrowDownRight, Phone } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({ name: '', phone: '', note: 'Nhu cầu quan tâm' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const formParams = new URLSearchParams();
      formParams.append('Họ tên', formData.name);
      formParams.append('Số điện thoại', formData.phone);
      formParams.append('Nhu cầu hoặc Lời nhắn', formData.note);

      await fetch('https://script.google.com/macros/s/AKfycbyvRdAmkdaWKUjVgkMKJueuYJ2A_dl9j2kmt11ijih9w7UNQxtGnZwaNX1YyChQMH-k/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formParams.toString(),
      });
      alert('Gửi thành công');
      setFormData({ name: '', phone: '', note: 'Nhu cầu quan tâm' });
    } catch (error) {
      console.error(error);
      alert('Có lỗi xảy ra, vui lòng thử lại.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-brand-light">
      <main className="flex-1 p-4 md:p-6 grid grid-cols-12 gap-4 max-w-7xl mx-auto align-middle pb-20">
        
        {/* HERO SECTION (Bento Large) */}
        <section className="col-span-12 md:col-span-8 bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
          <div className="relative z-10">
            <span className="inline-flex items-center gap-1 rounded-full bg-teal-50 px-3 py-1 text-xs font-bold text-teal-700 mb-6 uppercase tracking-widest border-none">
              <CheckCircle className="h-4 w-4" /> An tâm tài chính
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl mb-6 leading-tight">
              Bảo hiểm <span className="text-brand-primary">dễ hiểu</span>,<br className="hidden sm:block"/>An tâm trọn vẹn
            </h1>
            <p className="text-lg leading-8 text-slate-500 mb-8 max-w-xl">
              Tư vấn minh bạch, hỗ trợ nhanh chóng và đồng hành cùng bạn trong mọi tình huống bồi thường. 
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-brand-primary text-white shadow-lg shadow-teal-700/20 hover:bg-brand-primary-light border-0">
                Xem sản phẩm
              </Button>
              <Button size="lg" variant="outline" className="border border-slate-200 bg-white text-slate-700 hover:bg-slate-50">
                Hướng dẫn bồi thường
              </Button>
            </div>
          </div>
          {/* Decorative */}
          <div className="absolute right-[-40px] bottom-[-40px] w-64 h-64 bg-teal-50 rounded-full opacity-50 blur-3xl"></div>
        </section>

        {/* QUICK LOOKUP / SUPPORT (Bento Medium) */}
        <section className="col-span-12 md:col-span-4 bg-[#134e4a] rounded-2xl p-6 text-white flex flex-col shadow-sm">
          <h3 className="text-xl font-bold mb-4">Hỗ trợ nhanh</h3>
          <div className="space-y-3 flex-1">
            <Link to="/tra-cuu" className="flex items-center p-3 bg-white/10 rounded-xl hover:bg-white/15 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-teal-600 flex items-center justify-center mr-3 shadow-md"><Search className="h-5 w-5"/></div>
              <div>
                <p className="text-sm font-bold">Tra cứu hợp đồng</p>
                <p className="text-xs text-teal-200">Kiểm tra hiệu lực GCN nhanh</p>
              </div>
            </Link>
            <Link to="/boi-thuong" className="flex items-center p-3 bg-white/10 rounded-xl hover:bg-white/15 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-brand-accent flex items-center justify-center mr-3 shadow-md"><Shield className="h-5 w-5"/></div>
              <div>
                <p className="text-sm font-bold">Thủ tục bồi thường</p>
                <p className="text-xs text-teal-200">Quy trình xử lý hồ sơ</p>
              </div>
            </Link>
            <Link to="/cam-nang" className="flex items-center p-3 bg-white/10 rounded-xl hover:bg-white/15 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-sky-500 flex items-center justify-center mr-3 shadow-md"><FileText className="h-5 w-5"/></div>
              <div>
                <p className="text-sm font-bold">Cẩm nang bảo hiểm</p>
                <p className="text-xs text-teal-200">Kiến thức chọn gói</p>
              </div>
            </Link>
          </div>
          <div className="mt-4 pt-4 border-t border-white/10">
            <p className="text-xs text-teal-300">Cần hỗ trợ khẩn cấp?</p>
            <p className="text-lg font-bold">0912 660 869</p>
          </div>
        </section>

        {/* DANH MỤC SẢN PHẨM (Bento Small) */}
        {[
          { id: 'xe-may', icon: <Car className="h-6 w-6"/>, name: "Bảo hiểm Xe Máy", desc: "TNDS & Tự nguyện" },
          { id: 'o-to', icon: <Car className="h-6 w-6"/>, name: "Bảo hiểm Ô Tô", desc: "Toàn diện & TNDS" },
          { id: 'suc-khoe', icon: <Heart className="h-6 w-6"/>, name: "Sức khỏe & Tai nạn", desc: "Viện phí & Khám bệnh" },
          { id: 'du-lich', icon: <Plane className="h-6 w-6"/>, name: "Bảo hiểm Du Lịch", desc: "Nội địa & Quốc tế" },
        ].map(cat => (
          <Link key={cat.id} to="/san-pham" className="col-span-12 sm:col-span-6 md:col-span-3 bg-white border border-slate-200 rounded-2xl p-5 flex flex-col hover:border-brand-primary transition-colors group cursor-pointer shadow-sm">
            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-brand-primary group-hover:bg-teal-50 transition-colors">
              {cat.icon}
            </div>
            <h4 className="mt-4 font-bold text-slate-900 group-hover:text-brand-primary">{cat.name}</h4>
            <p className="text-sm text-slate-500 mt-2 flex-1">{cat.desc}</p>
            <div className="mt-4 flex items-center text-brand-primary text-sm font-bold">
              Xem chi tiết <ArrowRight className="h-4 w-4 ml-1" />
            </div>
          </Link>
        ))}

        {/* CONTACT FORM (Bento Wide) */}
        <section className="col-span-12 md:col-span-6 lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 md:p-8 flex flex-col shadow-sm">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h4 className="font-bold text-slate-900 text-xl">Nhận tư vấn miễn phí</h4>
              <p className="text-xs text-slate-500 uppercase font-medium mt-1 tracking-wide">Cam kết bảo mật thông tin 100%</p>
            </div>
            <div className="hidden sm:flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[10px] font-bold">P</div>
              <div className="w-8 h-8 rounded-full bg-teal-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-teal-700">K</div>
            </div>
          </div>
          <form className="grid grid-cols-2 gap-4 flex-1" onSubmit={handleSubmit}>
            <input type="text" placeholder="Họ và tên" className="col-span-2 sm:col-span-1 px-4 py-3 bg-slate-50 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
            <input type="tel" placeholder="Số điện thoại" className="col-span-2 sm:col-span-1 px-4 py-3 bg-slate-50 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required/>
            <select className="col-span-2 px-4 py-3 bg-slate-50 rounded-lg border border-slate-200 text-sm text-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20" value={formData.note} onChange={(e) => setFormData({ ...formData, note: e.target.value })}>
              <option value="Nhu cầu quan tâm" disabled>Nhu cầu quan tâm</option>
              <option value="Bảo hiểm Ô tô">Bảo hiểm Ô tô</option>
              <option value="Bảo hiểm Sức khỏe">Bảo hiểm Sức khỏe</option>
              <option value="Bảo hiểm Xe máy">Bảo hiểm Xe máy</option>
            </select>
            <Button type="submit" disabled={isSubmitting} className="col-span-2 bg-brand-accent text-white rounded-lg font-bold hover:bg-brand-accent-hover shadow-md shadow-brand-accent/20 py-6 text-base mt-2">
              {isSubmitting ? 'Đang gửi...' : 'Gửi yêu cầu'}
            </Button>
          </form>
          <div className="mt-6 flex gap-4 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
              <CheckCircle className="h-3.5 w-3.5 text-brand-primary" /> Tư vấn minh bạch
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
              <CheckCircle className="h-3.5 w-3.5 text-brand-primary" /> Quy trình rõ ràng
            </div>
          </div>
        </section>

        {/* QUY TRÌNH & NỔI BẬT (Bento Wide) */}
        <section className="col-span-12 md:col-span-6 lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 md:p-8 flex flex-col shadow-sm">
           <h3 className="text-xl font-bold mb-6 text-slate-900">Mua bảo hiểm dễ dàng</h3>
           <div className="space-y-6 flex-1">
              {[
                { step: "01", title: "Lựa chọn nhu cầu", desc: "Gửi nhu cầu cho chúng tôi." },
                { step: "02", title: "Nhận tư vấn đúng", desc: "Chuyên viên phân tích quyền lợi rõ ràng." },
                { step: "03", title: "Cấp điện tử", desc: "Giao dịch an toàn, dùng ngay." },
              ].map((s) => (
                <div key={s.step} className="flex gap-4 items-start">
                  <div className="flex flex-col items-center">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 font-bold text-xs">{s.step}</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{s.title}</h4>
                    <p className="mt-1 text-sm text-slate-500">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-orange-50 rounded-xl border border-orange-100">
               <div className="flex justify-between items-center">
                 <div>
                   <p className="text-xs text-brand-accent font-bold uppercase mb-1">Gói nổi bật</p>
                   <p className="text-sm font-bold text-slate-900">Bảo hiểm Ô tô toàn diện</p>
                 </div>
                 <Link to="/san-pham" className="text-orange-600 bg-white shadow-sm h-8 w-8 rounded-full flex items-center justify-center hover:bg-orange-600 hover:text-white transition-colors">
                   <ArrowRight className="h-4 w-4"/>
                 </Link>
               </div>
            </div>
        </section>
      </main>
    </div>
  );
}
