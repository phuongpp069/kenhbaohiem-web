import { Button } from "../components/ui/button";
import { CheckCircle, Info, FileText } from "lucide-react";
import { useState } from "react";

export default function ProductDetail() {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const formParams = new URLSearchParams();
      formParams.append('Họ tên', formData.name);
      formParams.append('Số điện thoại', formData.phone);
      formParams.append('Nhu cầu hoặc Lời nhắn', 'Quan tâm: Gói Bảo hiểm Sức khỏe Gia đình Toàn diện');

      await fetch('https://script.google.com/macros/s/AKfycbx9u1asXfNgMamUE6_CeGgK4Rt5ziXfrdwi3hnGKii4h3cveL-hc2N14m6Y5juDIbXO/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formParams.toString(),
      });
      alert('Gửi thành công');
      setFormData({ name: '', phone: '' });
    } catch (error) {
      console.error(error);
      alert('Có lỗi xảy ra, vui lòng thử lại.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-brand-light">
      {/* Hero */}
      <section className="bg-brand-primary text-white py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <span className="bg-teal-500 text-teal-50 px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block">BẢO HIỂM SỨC KHỎE</span>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Gói Bảo hiểm Sức khỏe Gia đình Toàn diện</h1>
          <p className="text-lg md:text-xl text-brand-primary-light text-slate-200 mb-8 max-w-2xl">Bảo vệ sức khoẻ toàn diện cho cả gia đình, bảo lãnh viện phí tại hơn 300 bệnh viện/phòng khám trên toàn quốc với mức phí tối ưu.</p>
          <div className="flex gap-4">
             <Button size="lg" className="bg-brand-accent text-white hover:bg-brand-accent-hover">Tư vấn báo phí</Button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
                <div>
                    <h2 className="text-2xl font-bold mb-4 text-brand-dark flex items-center gap-2"><CheckCircle className="text-brand-teal"/> Quyền lợi nổi bật</h2>
                    <ul className="space-y-4">
                        <li className="flex gap-3"><CheckCircle className="text-brand-primary h-6 w-6 shrink-0"/> Đề bù 100% chi phí nội trú đến 500 triệu/năm.</li>
                        <li className="flex gap-3"><CheckCircle className="text-brand-primary h-6 w-6 shrink-0"/> Không yêu cầu khám sức khỏe trước khi cấp đơn.</li>
                        <li className="flex gap-3"><CheckCircle className="text-brand-primary h-6 w-6 shrink-0"/> Chi trả quyền lợi thai sản ưu việt.</li>
                        <li className="flex gap-3"><CheckCircle className="text-brand-primary h-6 w-6 shrink-0"/> Quyền lợi ngoại trú và nha khoa linh hoạt lựa chọn.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-4 text-brand-dark flex items-center gap-2"><Info className="text-brand-teal"/> Đối tượng tham gia</h2>
                    <p className="text-slate-600 mb-2">Công dân Việt Nam hoặc người nước ngoài cư trú hợp pháp tại VN.</p>
                    <p className="text-slate-600">Độ tuổi: Từ 60 ngày tuổi đến 65 tuổi.</p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-4 text-brand-dark flex items-center gap-2"><FileText className="text-brand-teal"/> Hướng dẫn bồi thường</h2>
                    <p className="text-slate-600 mb-4">Các bước xử lý hồ sơ khi có sự kiện bảo hiểm:</p>
                    <ol className="list-decimal pl-5 space-y-2 text-slate-600">
                        <li>Sử dụng thẻ bảo lãnh tại các cơ sở y tế trong hệ thống liên kết.</li>
                        <li>Nếu ngoài hệ thống, thu thập bản gốc hóa đơn chứng từ y tế.</li>
                        <li>Gửi hồ sơ về bộ phận bồi thường hoặc qua App/Web theo hướng dẫn.</li>
                        <li>Nhận tiền chi trả trong vòng 10 ngày làm việc.</li>
                    </ol>
                </div>
            </div>

            <div className="md:col-span-1">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 sticky top-24">
                    <h3 className="text-lg font-bold mb-4">Đăng ký mua / Nhận hướng dẫn</h3>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <input className="w-full border p-3 rounded-lg bg-slate-50" placeholder="Họ và tên" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                        <input className="w-full border p-3 rounded-lg bg-slate-50" placeholder="Số điện thoại" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                        <Button className="w-full" disabled={isSubmitting}>{isSubmitting ? 'Đang gửi...' : 'Gửi thông tin'}</Button>
                    </form>
                    <div className="mt-4 pt-4 border-t text-sm text-center text-slate-500">
                        Hoặc gọi <a href="tel:0912660869" className="font-bold text-brand-primary">0912.660.869</a>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
