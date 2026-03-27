"use client";

import React from "react";
import AppImage from "@/components/ui/AppImage";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pb-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="brand-gradient-3 absolute -left-28 top-0 h-[420px] w-[420px] rounded-full opacity-20 blur-3xl" />
        <div className="brand-gradient-2 absolute right-0 top-20 h-[460px] w-[460px] rounded-full opacity-25 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-10 px-6 sm:px-8 lg:grid-cols-10 lg:gap-8 lg:px-10">
        <div className="lg:col-span-4">
          <p className="font-sub inline-flex items-center gap-2 rounded-full border border-accent/30 bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            <span className="h-2 w-2 rounded-full bg-secondary-green" />
            DICO Scan AI
          </p>

          <h1 className="mt-5 font-display text-[2.8rem] sm:text-[3.5rem] lg:text-[3.8rem] font-extrabold leading-[1.02] tracking-tight text-primary">
            Quét một lần
            <br />
            Biết ngay sản phẩm có phù hợp với bạn không
          </h1>

          <p className="mt-5 font-sans text-base sm:text-lg leading-relaxed text-fg-muted max-w-xl">
            Phân tích thành phần, cảnh báo chất gây tranh cãi và gợi ý lựa chọn phù hợp cho bạn và gia đình trước khi mua
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#download" className="brand-cta inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-sm font-bold shadow-card-lg">
              Tải ứng dụng miễn phí
            </a>
            <a href="#how-it-works" className="inline-flex items-center justify-center rounded-xl border border-neutral-border bg-white px-7 py-3.5 text-sm font-bold text-primary hover:border-accent">
              Xem cách hoạt động
            </a>
          </div>

          <p className="font-sub mt-5 text-xs sm:text-sm text-fg-muted">
            500.000+ lượt quét · 4.8★ App Store · 50.000+ người dùng
          </p>
        </div>

        <div className="lg:col-span-6">
          <div className="relative mx-auto w-[320px] sm:w-[390px] lg:w-[470px]">
            <div className="brand-gradient-3 absolute -inset-5 rounded-[3rem] opacity-35 blur-xl" />

            <div className="relative overflow-hidden rounded-[2.6rem] border-[6px] border-white/90 shadow-float" style={{ aspectRatio: "9/18.5" }}>
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1d6bba2a8-1774206968188.png"
                alt="Giao diện quét sản phẩm của DICO Scan"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-primary/55" />

              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/90 p-3.5 backdrop-blur-md">
                <p className="font-sub text-[10px] font-semibold uppercase tracking-[0.14em] text-primary/70">Kết quả quét tức thì</p>
                <p className="mt-1 font-sans text-sm font-bold text-primary">Sữa tươi Vinamilk 100%</p>
                <div className="mt-2 flex items-end justify-between">
                  <div>
                    <span className="font-display text-[1.8rem] leading-none font-extrabold text-accent">92</span>
                    <span className="ml-1 text-xs font-semibold text-fg-muted">/100</span>
                  </div>
                  <span className="rounded-full bg-[#ecffe7] px-2.5 py-1 text-[10px] font-bold text-[#33cd1a]">AN TOÀN</span>
                </div>
              </div>
            </div>

            <div className="brand-card absolute -left-12 bottom-8 hidden rounded-2xl px-3 py-2 sm:block">
              <p className="font-sub text-[10px] font-bold uppercase tracking-wide text-fg-muted">Cảnh báo thành phần</p>
              <p className="font-sans mt-1 text-xs font-semibold text-[#f32b2b]">Paraben · Sulfate</p>
            </div>

            <div className="brand-card absolute -right-10 top-14 hidden rounded-2xl px-3 py-2 sm:block">
              <p className="font-sub text-[10px] font-bold uppercase tracking-wide text-fg-muted">Gợi ý thay thế</p>
              <p className="font-sans mt-1 text-xs font-semibold text-primary">3 lựa chọn tốt hơn</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
