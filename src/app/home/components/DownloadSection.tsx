"use client";

import React from "react";

const bullets = [
  "Cảnh báo thành phần đáng lo",
  "Giải thích dễ hiểu cho người dùng phổ thông",
  "Gợi ý lựa chọn phù hợp với hồ sơ gia đình",
];

export default function DownloadSection() {
  return (
    <section id="download" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="brand-card rounded-3xl p-7 sm:p-8">
            <p className="font-sub text-xs font-bold uppercase tracking-[0.18em] text-[#f32b2b]">Vấn đề</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold leading-tight text-primary">
              Không đọc nổi bảng thành phần khi đứng trước quầy hàng.
            </h2>
            <p className="mt-4 text-fg-muted font-sans leading-relaxed">
              Tên chất khó hiểu, thông tin dày đặc và thiếu thời gian khiến người dùng rất khó biết sản phẩm có thật sự phù hợp hay không
            </p>
          </div>

          <div className="rounded-3xl p-7 sm:p-8 text-white" style={{ background: "linear-gradient(135deg, #4a8cff 0%, #8a5cff 100%)" }}>
            <p className="font-sub text-xs font-bold uppercase tracking-[0.18em] text-white/80">Giải pháp</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold leading-tight">
              Quét sản phẩm trong 1 giây. Hiểu rõ trước khi mua.
            </h2>

            <ul className="mt-5 space-y-3">
              {bullets.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-white/90" />
                  <span className="font-sans text-sm text-white/90">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a href="#" className="inline-flex justify-center rounded-xl bg-white px-5 py-3 text-sm font-bold text-primary">Tải trên App Store</a>
              <a href="#" className="inline-flex justify-center rounded-xl border border-white/35 bg-white/10 px-5 py-3 text-sm font-bold text-white">Tải trên Google Play</a>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ background: "linear-gradient(135deg, #4a8cff 0%, #8a5cff 100%)" }}>
          <p className="font-display text-white text-xl sm:text-2xl font-bold text-center sm:text-left">Bắt đầu quét miễn phí ngay hôm nay</p>
          <div className="flex items-center gap-3">
            <span className="font-sub text-white/80 text-xs hidden sm:inline">Không cần thẻ tín dụng</span>
            <a href="#" className="inline-flex rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-primary">Tải ứng dụng</a>
          </div>
        </div>
      </div>
    </section>
  );
}
