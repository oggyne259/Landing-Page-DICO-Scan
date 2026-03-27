import React from "react";

const outcomes = [
  {
    title: "Biết ngay mức độ an toàn",
    desc: "Nhận điểm an toàn rõ ràng ngay sau khi quét.",
    color: "#33cd1a",
  },
  {
    title: "Hiểu vì sao nên tránh",
    desc: "Chỉ ra thành phần gây lo ngại và lý do cụ thể.",
    color: "#f32b2b",
  },
  {
    title: "Có lựa chọn thay thế",
    desc: "Gợi ý sản phẩm phù hợp hơn cho cùng nhu cầu.",
    color: "#7fb3ff",
  },
  {
    title: "Phù hợp cho cả gia đình",
    desc: "Áp dụng kết quả theo từng hồ sơ cá nhân hóa.",
    color: "#b8a4ff",
  },
];

export default function OutcomesSection() {
  return (
    <section id="outcomes" className="py-20 bg-bg-alt">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-10">
          <p className="text-accent font-bold uppercase tracking-[0.22em] text-xs mb-3 font-sans">Giá trị sau mỗi lần quét</p>
          <h2 className="font-display font-black text-4xl sm:text-5xl leading-[1.05] tracking-tight text-primary">
            Sau 1 lần quét, bạn biết ngay
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {outcomes.map((item) => (
            <div key={item.title} className="rounded-3xl border border-neutral-border bg-white p-6 shadow-card">
              <div className="h-2.5 w-12 rounded-full mb-4" style={{ background: item.color }} />
              <h3 className="font-display text-xl font-bold text-primary leading-snug">{item.title}</h3>
              <p className="mt-2 font-sans text-sm text-fg-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
