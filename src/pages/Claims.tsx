export default function Claims() {
  return (
    <div className="py-16 max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6 text-brand-dark">Hướng dẫn bồi thường</h1>
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 prose max-w-none text-slate-700">
        <p className="lead text-lg">Chúng tôi luôn đồng hành cùng bạn khi có sự kiện rủi ro xảy ra. Dưới đây là các bước quy trình cơ bản để nhận bồi thường nhanh chóng.</p>
        
        <h3 className="text-xl font-bold mt-8 mb-4 text-brand-primary">Bước 1: Thông báo sự kiện bảo hiểm</h3>
        <p>Gọi ngay hotline khẩn cấp <strong>0912.660.869</strong> để được hướng dẫn ngay tại hiện trường (đối với xe cơ giới) hoặc khi nhập viện (đối với con người).</p>

        <h3 className="text-xl font-bold mt-8 mb-4 text-brand-primary">Bước 2: Nộp hồ sơ bồi thường</h3>
        <p>Chuẩn bị các tài liệu chứng từ theo yêu cầu (GCN, hóa đơn chứng từ y tế/sửa chữa, biên bản công an nếu có). Bạn có thể nộp trực tiếp tại văn phòng hoặc gửi chuyển phát.</p>

        <h3 className="text-xl font-bold mt-8 mb-4 text-brand-primary">Bước 3: Chờ thẩm định & Chi trả</h3>
        <p>Công ty tiến hành thẩm định hồ sơ trong vòng thời gian quy định (thường từ 5-15 ngày làm việc). Thông báo phương án giải quyết và chuyển khoản bồi thường.</p>
      </div>
    </div>
  );
}
