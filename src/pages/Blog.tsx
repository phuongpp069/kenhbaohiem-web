export default function Blog() {
  return (
    <div className="py-16 max-w-7xl mx-auto px-4 min-h-[60vh]">
      <h1 className="text-3xl font-bold mb-8 text-brand-dark">Cẩm nang Bảo hiểm</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: "Kinh nghiệm chọn bảo hiểm sức khỏe cho bé", date: "12/03/2026", category: "Kinh nghiệm" },
          { title: "Phân biệt Bảo hiểm TNDS bắt buộc và Tự nguyện xe máy", date: "05/03/2026", category: "Giải đáp" },
          { title: "Mua bảo hiểm du lịch quốc tế: Những lưu ý không thể bỏ qua", date: "28/02/2026", category: "Từ chuyên gia" },
          { title: "Khi gặp tai nạn ô tô, chủ xe cần làm gì đầu tiên?", date: "15/02/2026", category: "Hướng dẫn" },
        ].map((article, i) => (
          <div key={i} className="bg-white border rounded-xl overflow-hidden hover:shadow-md transition-shadow cursor-pointer flex flex-col">
            <div className="h-44 bg-slate-200"></div>
            <div className="p-6 flex-1 flex flex-col">
              <span className="text-xs font-bold text-brand-teal mb-2">{article.category}</span>
              <h3 className="font-bold text-lg leading-tight mb-2 flex-1">{article.title}</h3>
              <p className="text-xs text-slate-500">{article.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
