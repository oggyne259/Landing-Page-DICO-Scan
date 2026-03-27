"use client";

import React from "react";
import AppImage from "@/components/ui/AppImage";

const testimonials = [
  {
    quote: "Mình chỉ cần quét là biết ngay sản phẩm có phù hợp với con nhỏ không. Rất yên tâm khi mua sắm.",
    name: "Nguyễn Thị Lan",
    role: "Mẹ của 2 bé · Hà Nội",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_132547bb0-1765135160588.png",
    rating: 5,
  },
  {
    quote: "Phần giải thích thành phần rất dễ hiểu, không còn cảm giác rối khi đọc nhãn như trước.",
    name: "Trần Minh Khoa",
    role: "Kỹ sư phần mềm · TP.HCM",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_140984387-1766976228771.png",
    rating: 5,
  },
  {
    quote: "Hồ sơ gia đình cực kỳ hữu ích vì mỗi người có cảnh báo riêng. Tiết kiệm rất nhiều thời gian.",
    name: "Phạm Thu Hương",
    role: "Dược sĩ · Đà Nẵng",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1aa47467d-1765647124700.png",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24" style={{ background: "linear-gradient(180deg, #4A8CFF 0%, #8A5CFF 100%)" }}>
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="mb-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { value: "500K+", label: "lượt quét" },
            { value: "4.8", label: "đánh giá trung bình", star: true },
            { value: "50K+", label: "người dùng" },
            { value: "99%", label: "độ chính xác AI" },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl border border-white/20 bg-white/10 p-4 text-center">
              <p className="font-display text-3xl font-extrabold text-white leading-none">
                {s.value}
                {s.star ? <span className="text-[#ffe957]">★</span> : null}
              </p>
              <p className="font-sub mt-1 text-[10px] uppercase tracking-[0.14em] text-white/80">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-10">
          <p className="text-white/90 font-bold uppercase tracking-[0.22em] text-xs mb-3 font-sans">Người dùng thực, kết quả thực</p>
          <h2 className="font-display font-black text-4xl sm:text-5xl leading-[1.05] tracking-tight text-white">
            Được tin dùng bởi
            <br />
            hàng nghìn gia đình
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <div className="mb-3 flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={`${t.name}-star-${i}`} className="text-[#ffe957] text-sm leading-none">★</span>
                ))}
              </div>
              <p className="text-white text-sm leading-relaxed font-sans">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="h-10 w-10 overflow-hidden rounded-full border border-white/30">
                  <AppImage src={t.avatar} alt={t.name} width={40} height={40} className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className="font-sans text-sm font-bold text-white">{t.name}</p>
                  <p className="font-sans text-xs text-white/75">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
