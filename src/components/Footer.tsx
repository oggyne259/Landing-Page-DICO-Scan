import React from "react";
import Link from "next/link";
import AppLogo from "@/components/ui/AppLogo";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-[#d9e2ff] bg-white/70">
      <div className="mx-auto max-w-[1200px] px-6 py-14 sm:px-8 lg:px-10">
        <div className="brand-gradient-3 mb-10 rounded-3xl p-8 text-white">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="font-sub mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/75">DICO Scan</p>
              <h3 className="font-display text-3xl font-extrabold leading-tight">Quét nhanh, hiểu rõ, chọn an toàn.</h3>
              <p className="font-sub mt-3 max-w-xl text-sm text-white/80">
                Ứng dụng hỗ trợ đánh giá độ an toàn sản phẩm theo hồ sơ sức khỏe cá nhân và gia đình.
              </p>
            </div>
            <a href="#download" className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-bold text-primary shadow-card">
              Tải ứng dụng
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 inline-flex items-center gap-2.5">
              <AppLogo src="/assets/images/app_logo.png" size={40} iconName="QrCodeIcon" />
              <span className="font-display text-xl font-extrabold text-primary">
                DICO<span className="text-accent">Scan</span>
              </span>
            </Link>
            <p className="font-sans max-w-md text-sm leading-relaxed text-fg-muted">
              Phân tích thành phần sản phẩm theo ngữ cảnh cá nhân hóa, giúp bạn đưa ra quyết định mua sắm thông minh hơn mỗi ngày.
            </p>
          </div>

          <div>
            <p className="font-sub mb-4 text-xs font-bold uppercase tracking-[0.2em] text-fg-muted">Sản phẩm</p>
            <ul className="space-y-2.5">
              <li><Link href="#comparison" className="font-sans text-sm text-fg-muted hover:text-primary">Khác biệt</Link></li>
              <li><Link href="#outcomes" className="font-sans text-sm text-fg-muted hover:text-primary">Kết quả sau quét</Link></li>
              <li><Link href="#how-it-works" className="font-sans text-sm text-fg-muted hover:text-primary">Cách hoạt động</Link></li>
              <li><Link href="#download" className="font-sans text-sm text-fg-muted hover:text-primary">Tải xuống</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-sub mb-4 text-xs font-bold uppercase tracking-[0.2em] text-fg-muted">Liên hệ</p>
            <ul className="space-y-2.5">
              <li><Link href="#" className="font-sans text-sm text-fg-muted hover:text-primary">Chính sách bảo mật</Link></li>
              <li><Link href="#" className="font-sans text-sm text-fg-muted hover:text-primary">Điều khoản sử dụng</Link></li>
              <li><Link href="#" className="font-sans text-sm text-fg-muted hover:text-primary">Hỗ trợ</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-[#d9e2ff] pt-6 sm:flex-row sm:items-center">
          <p className="font-sans text-sm text-fg-muted">© 2026 DICO Scan. All rights reserved.</p>
          <div className="font-sub inline-flex items-center gap-2 text-xs font-semibold text-fg-muted">
            <span className="h-2 w-2 rounded-full bg-secondary-green" />
            Hệ thống hoạt động ổn định
          </div>
        </div>
      </div>
    </footer>
  );
}
