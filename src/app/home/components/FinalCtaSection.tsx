import React from "react";

export default function FinalCtaSection() {
  return (
    <section id="download" className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="rounded-3xl px-6 py-10 sm:px-10 sm:py-12 text-center" style={{ background: "linear-gradient(135deg, #4a8cff 0%, #8a5cff 100%)" }}>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
            Tải DICO Scan miễn phí và quét sản phẩm đầu tiên ngay hôm nay
          </h2>
          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#" className="inline-flex items-center gap-2.5 rounded-xl bg-black px-6 py-3 text-sm font-bold text-white shadow-card-lg hover:bg-black/90">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Tải trên App Store
            </a>
            <a href="#" className="inline-flex items-center gap-2.5 rounded-xl bg-[#1f1f1f] px-6 py-3 text-sm font-bold text-white shadow-card-lg hover:bg-[#171717]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3.18 23.76c.3.17.64.19.96.08l12.45-6.99-2.68-2.68-10.73 9.59z" fill="#34A853" />
                <path d="M0 2.91v18.18c0 .63.18 1.12.49 1.45l10.26-10.26L.49 1.46C.18 1.79 0 2.28 0 2.91z" fill="#4285F4" />
                <path d="M20.4 10.53l-2.9-1.63-3.01 3.01 3.01 3.01 2.92-1.64c.83-.47.83-1.23-.02-1.75z" fill="#FBBC05" />
                <path d="M3.18.24L15.63 7.23l-2.68 2.68L2.22.32c.32-.11.66-.09.96.08V.24z" fill="#EA4335" />
              </svg>
              Tải trên Google Play
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
