import React from "react";

const pillars = [
  {
    title: "Minh bạch",
    desc: "Thông tin thành phần hiển thị rõ ràng, không lược bỏ và không gây hiểu nhầm",
  },
  {
    title: "Cá nhân hóa",
    desc: "Mỗi kết quả được điều chỉnh theo hồ sơ sức khỏe và nhu cầu thực tế của từng người",
  },
  {
    title: "Dễ hiểu",
    desc: "Biến dữ liệu kỹ thuật thành khuyến nghị rõ ràng để quyết định nhanh hơn",
  },
];

export default function AboutSection() {
  return (
    <section className="py-24 bg-white" id="ve-dico-scan">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-12">
          <p className="font-sub text-xs font-bold uppercase tracking-[0.2em] text-accent">Về DICO Scan</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-extrabold text-primary leading-tight">
            Trợ lý giúp bạn mua sắm an toàn hơn mỗi ngày
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-fg-muted font-sans leading-relaxed">
            Chúng tôi xây dựng DICO Scan để trả lời nhanh câu hỏi quan trọng nhất khi mua hàng: sản phẩm này có phù hợp và an toàn cho người thân của bạn không?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((item) => (
            <div key={item.title} className="rounded-3xl border border-neutral-border bg-bg p-7">
              <p className="font-display text-2xl font-bold text-primary">{item.title}</p>
              <p className="mt-2 text-sm font-sans leading-relaxed text-fg-muted">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-[#d9e2ff] bg-[#f6f8ff] px-6 py-5 flex flex-col items-center justify-center gap-4 text-center">
          <p className="font-sub text-sm font-semibold text-fg-muted">
            Cam kết minh bạch về tiêu chí phân tích và cách giải thích thông tin sản phẩm.
          </p>
          <a href="#download" className="brand-cta inline-flex rounded-xl px-5 py-2.5 text-sm font-bold">Tải ứng dụng miễn phí</a>
        </div>
      </div>
    </section>
  );
}
