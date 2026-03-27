import React from "react";

const stats = [
  { value: "500K+", label: "lượt quét" },
  { value: "4.8★", label: "đánh giá trung bình" },
  { value: "50K+", label: "người dùng" },
  { value: "99%", label: "độ chính xác AI" },
];

export default function TrustBarSection() {
  return (
    <section className="pb-12 -mt-6">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="brand-card rounded-3xl px-5 py-5 sm:px-8 sm:py-6 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((item) => (
            <div key={item.label} className="text-center lg:text-left">
              <p className="font-display text-3xl sm:text-4xl font-extrabold text-primary leading-none">{item.value}</p>
              <p className="font-sub mt-1 text-xs uppercase tracking-[0.15em] text-fg-muted">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
