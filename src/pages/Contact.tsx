import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "../components/ui/button";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', note: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const formParams = new URLSearchParams();
      formParams.append('Họ tên', formData.name);
      formParams.append('Số điện thoại', formData.phone);
      formParams.append('Nhu cầu hoặc Lời nhắn', formData.note);

      await fetch('https://script.google.com/macros/s/AKfycbx9u1asXfNgMamUE6_CeGgK4Rt5ziXfrdwi3hnGKii4h3cveL-hc2N14m6Y5juDIbXO/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formParams.toString(),
      });
      alert('Gửi thành công');
      setFormData({ name: '', phone: '', note: '' });
    } catch (error) {
      console.error(error);
      alert('Có lỗi xảy ra, vui lòng thử lại.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-16 max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4 text-brand-dark">Liên hệ với chúng tôi</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">Mọi thắc mắc về quyền lợi bảo hiểm, cần tư vấn mua hoặc hỗ trợ làm hồ sơ bồi thường, Kênh Bảo Hiểm luôn sẵn sàng lắng nghe.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex gap-4 items-start">
            <div className="bg-brand-primary/10 p-3 rounded-full text-brand-primary shrink-0">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Hotline tư vấn (Zalo)</h3>
              <a href="tel:0912660869" className="text-xl font-bold text-brand-primary">0912.660.869</a>
              <p className="text-sm text-slate-500 mt-2">Hỗ trợ nhanh chóng 24/7 đối với các trường hợp khẩn cấp.</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex gap-4 items-start">
            <div className="bg-brand-primary/10 p-3 rounded-full text-brand-primary shrink-0">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Email liên hệ</h3>
              <a href="mailto:phuongpp173@gmail.com" className="text-lg font-medium text-brand-primary">phuongpp173@gmail.com</a>
              <p className="text-sm text-slate-500 mt-2">Gửi chúng tôi yêu cầu hoặc giấy tờ cần xử lý.</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex gap-4 items-start">
            <div className="bg-brand-primary/10 p-3 rounded-full text-brand-primary shrink-0">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Khu vực phục vụ</h3>
              <p className="font-medium text-slate-700">Trực tuyến toàn quốc</p>
              <p className="text-sm text-slate-500 mt-2">Cấp giấy chứng nhận điện tử và gửi hóa đơn VAT hợp lệ.</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-2xl font-bold mb-6 text-brand-dark">Gửi lời nhắn cho KBH</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium mb-1">Họ tên của bạn</label>
              <input type="text" name="Họ tên" id="contact-name" className="w-full border rounded-lg p-3 bg-slate-50" placeholder="Nhập họ tên" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Số điện thoại *</label>
              <input type="tel" name="Số điện thoại" id="contact-phone" className="w-full border rounded-lg p-3 bg-slate-50" placeholder="Nhập số điện thoại" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Nội dung yêu cầu</label>
              <textarea name="Nhu cầu hoặc Lời nhắn" id="contact-note" rows={4} className="w-full border rounded-lg p-3 bg-slate-50" placeholder="Bạn cần tư vấn sản phẩm nào?" value={formData.note} onChange={(e) => setFormData({ ...formData, note: e.target.value })}></textarea>
            </div>
            <Button size="lg" disabled={isSubmitting} className="w-full mt-4">{isSubmitting ? 'Đang gửi...' : 'Gửi thông tin'}</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
