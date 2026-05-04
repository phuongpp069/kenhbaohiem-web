import { Link } from "react-router-dom";

export default function Products() {
  return (
    <div className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[60vh]">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">Khám phá các sản phẩm bảo hiểm</h1>
        <p className="mt-4 text-lg text-slate-600">Đầy đủ các giải pháp cho cá nhân và gia đình</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Mock Product Cards */}
        {[
            { id: '1', title: 'Bảo hiểm Tiêu chuẩn Xe máy', type: 'Xe cộ', price: 'Từ 66.000đ' },
            { id: '2', title: 'Bảo hiểm Thân vỏ Ô tô', type: 'Xe cộ', price: 'Liên hệ tư vấn' },
            { id: '3', title: 'Bảo hiểm Sức khỏe Cao cấp', type: 'Sức khỏe', price: 'Từ 1.2M/năm' },
        ].map(p => (
            <Link key={p.id} to="/chi-tiet-san-pham" className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <span className="text-xs font-semibold text-brand-primary bg-brand-primary/10 px-2 py-1 rounded-md">{p.type}</span>
                <h3 className="text-xl font-bold text-brand-dark mt-4 mb-2">{p.title}</h3>
                <p className="text-brand-accent font-medium mb-4">{p.price}</p>
                <div className="text-brand-primary text-sm font-medium hover:underline">Xem chi tiết &rarr;</div>
            </Link>
        ))}
      </div>
    </div>
  );
}
