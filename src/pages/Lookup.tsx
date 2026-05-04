import { Button } from "../components/ui/button";

export default function Lookup() {
  return (
    <div className="bg-brand-light py-16">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4 text-brand-dark">Tra cứu hồ sơ & Chứng nhận</h1>
          <p className="text-slate-600">Kiểm tra tính hiệu lực hoặc tình trạng hồ sơ bồi thường của bạn</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex gap-4 border-b border-slate-200 mb-6">
            <button className="pb-4 border-b-2 border-brand-primary text-brand-primary font-bold">Giấy chứng nhận</button>
            <button className="pb-4 text-slate-500 font-medium hover:text-brand-primary">Hồ sơ bồi thường</button>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Loại giấy tờ</label>
              <select className="w-full border rounded-lg p-3 bg-slate-50">
                <option>CMND / CCCD</option>
                <option>Hộ chiếu</option>
                <option>Biển số xe</option>
                <option>Mã hợp đồng</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Số giấy tờ (Nhập dãy số tương ứng)</label>
              <input type="text" className="w-full border rounded-lg p-3 bg-slate-50" placeholder="..." />
            </div>
            <Button size="lg" className="w-full">Tra cứu ngay</Button>
          </form>
          
          <div className="mt-6 p-4 bg-blue-50 text-blue-800 rounded-lg text-sm">
            Hệ thống tra cứu đang trong giai đoạn nâng cấp. Để tra cứu nhanh, vui lòng cung cấp thông tin qua Zalo Hotline <strong>0912.660.869</strong>.
          </div>
        </div>
      </div>
    </div>
  );
}
