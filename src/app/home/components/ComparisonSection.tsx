import React from "react";

const rows = [
  {
    title: "Kết quả sau khi quét",
    normal: "Hiển thị tên sản phẩm và thông tin chung",
    dico: "Phân tích thành phần + cảnh báo rủi ro theo hồ sơ cá nhân",
  },
  {
    title: "Mức độ dễ hiểu",
    normal: "Khá kỹ thuật, khó đọc nhanh",
    dico: "Giải thích ngắn gọn, dễ quyết định ngay tại quầy",
  },
  {
    title: "Mức độ cá nhân hóa",
    normal: "Không cá nhân hóa",
    dico: "Cá nhân hóa theo dị ứng, sức khỏe và nhu cầu gia đình",
  },
];

export default function ComparisonSection() {
  return (
    <section id="comparison" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-10">
          <p className="text-accent font-bold uppercase tracking-[0.22em] text-xs mb-3 font-sans">Khác biệt cốt lõi</p>
          <h2 className="font-display font-black text-4xl sm:text-5xl leading-[1.05] tracking-tight text-primary">
            Khác gì app quét mã vạch khác?
          </h2>
        </div>

        <div className="overflow-hidden rounded-3xl border border-neutral-border shadow-card">
          <div className="grid grid-cols-12 bg-[#f5f8ff]">
            <div className="col-span-4 px-5 py-4 font-sub text-xs font-bold uppercase tracking-[0.14em] text-fg-muted">Tiêu chí</div>
            <div className="col-span-4 px-5 py-4 font-sub text-xs font-bold uppercase tracking-[0.14em] text-fg-muted">App quét mã thông thường</div>
            <div className="col-span-4 px-5 py-4 font-sub text-xs font-bold uppercase tracking-[0.14em] text-primary">DICO Scan AI</div>
          </div>

          {rows.map((row, i) => (
            <div key={row.title} className={`grid grid-cols-12 ${i % 2 === 0 ? "bg-white" : "bg-[#fafcff]"}`}>
              <div className="col-span-4 px-5 py-5 border-t border-neutral-border/70">
                <p className="font-display text-lg font-bold text-primary">{row.title}</p>
              </div>
              <div className="col-span-4 px-5 py-5 border-t border-neutral-border/70">
                <p className="font-sans text-sm text-fg-muted leading-relaxed">{row.normal}</p>
              </div>
              <div className="col-span-4 px-5 py-5 border-t border-neutral-border/70 bg-[#f3f7ff]">
                <p className="font-sans text-sm text-primary leading-relaxed font-semibold">{row.dico}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
