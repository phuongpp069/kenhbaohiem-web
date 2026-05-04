export default function About() {
  return (
    <div className="py-16 max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6 text-brand-dark">Về Kênh Bảo Hiểm</h1>
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        <h2 className="text-xl font-bold mb-4 text-brand-primary">Sứ mệnh của chúng tôi</h2>
        <p className="text-slate-600 mb-6">
          KÊNH BẢO HIỂM ra đời với mục đích làm cầu nối, giúp người dùng phổ thông tiếp cận các sản phẩm bảo hiểm từ các công ty uy tín một cách dễ hiểu, minh bạch và an toàn nhất. Chúng tôi thấu hiểu khó khăn từ các thuật ngữ phức tạp, và cam kết luôn giải thích rõ ràng quyền lợi cho từng khách hàng.
        </p>

        <h2 className="text-xl font-bold mb-4 text-brand-primary">Giá trị cốt lõi</h2>
        <ul className="list-disc pl-5 space-y-2 text-slate-600 mb-6">
          <li><strong>Minh bạch:</strong> Tư vấn đúng, đủ điểm mạnh và điểm trừ của từng sản phẩm.</li>
          <li><strong>Thực tiễn:</strong> Sản phẩm được lựa chọn để giải quyết đúng nhu cầu và tài chính.</li>
          <li><strong>Đồng hành:</strong> Hỗ trợ quy trình yêu cầu bồi thường sau bán, không bỏ rơi khách hàng khi có sự cố.</li>
        </ul>
      </div>
    </div>
  );
}
