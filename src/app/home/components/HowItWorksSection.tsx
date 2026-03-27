"use client";

import React from "react";
import AppImage from "@/components/ui/AppImage";

const steps = [
  {
    num: "01",
    title: "Quét mã",
    desc: "Mở ứng dụng và quét barcode hoặc QR của sản phẩm.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fae9d39a-1767505936020.png",
  },
  {
    num: "02",
    title: "Xem phân tích",
    desc: "Nhận điểm an toàn và giải thích thành phần bằng ngôn ngữ dễ hiểu.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1983e84a9-1774206968689.png",
  },
  {
    num: "03",
    title: "Nhận khuyến nghị",
    desc: "Ứng dụng gợi ý lựa chọn phù hợp với hồ sơ cá nhân hoặc gia đình.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1755bfb12-1767112653268.png",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-bg-alt">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-12">
          <p className="text-accent font-bold uppercase tracking-[0.22em] text-xs mb-3 font-sans">Thiết lập từng bước</p>
          <h2 className="font-display font-black text-4xl sm:text-5xl leading-[1.05] tracking-tight text-primary">
            Ba bước
            <br />
            An toàn trọn vẹn
          </h2>
          <p className="mt-4 text-fg-muted font-sans max-w-2xl mx-auto">Từ quét mã đến khuyến nghị cuối cùng, toàn bộ trải nghiệm được thiết kế để ra quyết định nhanh và rõ ràng</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative">
          <div className="pointer-events-none absolute top-24 left-0 right-0 hidden md:block">
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
          </div>

          {steps.map((step) => (
            <div key={step.num} className="relative rounded-3xl overflow-hidden border border-neutral-border bg-white shadow-card">
              <div className="relative h-52">
                <AppImage src={step.image} alt={step.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-primary/55 to-primary/15" />
                <span className="absolute top-4 left-4 font-display text-5xl font-black text-white/90 leading-none">{step.num}</span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-primary">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted font-sans">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
