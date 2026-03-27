# DICO Scan Landing Page (Next.js 15)

Landing page giới thiệu sản phẩm **DICO Scan**: ứng dụng quét mã sản phẩm, phân tích thành phần bằng AI và đưa ra khuyến nghị an toàn theo hồ sơ cá nhân/gia đình.

## 1) Tổng quan dự án

- Framework: **Next.js 15** (App Router)
- Ngôn ngữ: **TypeScript**
- UI: **Tailwind CSS** + custom CSS tokens
- Font: Montserrat, Inter, Roboto, Open Sans, Lato (qua `next/font/google`)
- Đường dẫn chính: `http://localhost:4028/home`
- Redirect mặc định: `/` -> `/home`

## 2) Cấu trúc landing page hiện tại

Flow trang (đã tối ưu theo chuyển đổi):

1. Hero (headline + CTA + mockup)
2. Trust bar số liệu
3. Comparison: "Khác gì app quét mã vạch khác?"
4. Outcomes: "Sau 1 lần quét, bạn biết ngay"
5. How it works: 3 bước (scan -> hiểu -> chọn)
6. Testimonials + số liệu
7. Final CTA lớn tải app

## 3) Cấu trúc thư mục

```text
scanbar/
|-- public/
|   |-- favicon.ico
|   `-- assets/images/
|       |-- app_logo.png
|       `-- no_image.png
|-- src/
|   |-- app/
|   |   |-- layout.tsx
|   |   |-- icon.png
|   |   |-- apple-icon.png
|   |   |-- home/page.tsx
|   |   `-- home/components/
|   |       |-- HeroSection.tsx
|   |       |-- TrustBarSection.tsx
|   |       |-- ComparisonSection.tsx
|   |       |-- OutcomesSection.tsx
|   |       |-- HowItWorksSection.tsx
|   |       |-- TestimonialsSection.tsx
|   |       |-- FinalCtaSection.tsx
|   |       `-- AboutSection.tsx
|   |-- components/
|   |   |-- Header.tsx
|   |   |-- Footer.tsx
|   |   `-- ui/
|   |       |-- AppImage.tsx
|   |       |-- AppLogo.tsx
|   |       `-- AppIcon.tsx
|   `-- styles/
|       |-- index.css
|       `-- tailwind.css
|-- design.md
|-- tailwind.config.js
|-- next.config.mjs
`-- package.json
```

## 4) Design system đang dùng

Nguồn chuẩn màu/font: `design.md`

### Palette chính
- `#7fb3ff`
- `#b8a4ff`
- `#4a8cff`
- `#8a5cff`

### Màu phụ
- `#ff9f6e`
- `#ffe957`
- `#f32b2b`
- `#33cd1a`

### Gradient
- Mix 2: `#7fb3ff -> #b8a4ff`
- Mix 3: `#4a8cff -> #7fb3ff -> #b8a4ff`

### Typography
- Heading: Montserrat (700/800), Roboto (700)
- Sub-heading: Inter (500/600), Lato (400/700)
- Body: Inter (400), Roboto (400), Open Sans (400)

## 5) Chạy dự án local

### Yêu cầu
- Node.js 18+ (khuyến nghị 20+)
- npm

### Cài đặt
```bash
npm install
```

### Chạy dev
```bash
npm run dev
```

Mặc định chạy ở:
- `http://localhost:4028`
- trang chính: `http://localhost:4028/home`

## 6) Scripts

- `npm run dev`: chạy môi trường phát triển (port 4028)
- `npm run build`: build production
- `npm run serve`: chạy production server sau khi build
- `npm run start`: alias đang trỏ về `next dev -p 4028`
- `npm run type-check`: kiểm tra TypeScript (`tsc --noEmit`)
- `npm run lint`: chạy ESLint
- `npm run lint:fix`: tự động sửa lỗi lint có thể fix
- `npm run format`: format code bằng Prettier

## 7) Cấu hình quan trọng

### `next.config.mjs`
- `redirects`: `/` -> `/home`
- `images.remotePatterns`: lấy từ `image-hosts.config.mjs`
- `typescript.ignoreBuildErrors = true`
- `eslint.ignoreDuringBuilds = true`

Lưu ý: dự án hiện cho phép build bỏ qua lỗi TS/ESLint theo config trên; nên vẫn chạy `npm run type-check` định kỳ để kiểm soát chất lượng.

## 8) Logo và favicon

- Logo chính: `public/assets/images/app_logo.png`
- Tab icons:
  - `src/app/icon.png`
  - `src/app/apple-icon.png`
  - `public/favicon.ico`
- Metadata icon cấu hình trong `src/app/layout.tsx`

## 9) Hướng dẫn chỉnh nội dung landing

- Chỉnh thứ tự section: `src/app/home/page.tsx`
- Chỉnh text/CTA từng section: `src/app/home/components/*.tsx`
- Chỉnh màu/font toàn cục:
  - `tailwind.config.js`
  - `src/styles/tailwind.css`
  - `design.md`

## 10) Ghi chú phát triển

- Ưu tiên dùng alias `@/` theo `tsconfig.json`
- Ưu tiên giữ consistency font classes:
  - `font-display`
  - `font-sub`
  - `font-sans`
- Khi chỉnh theme, luôn đối chiếu `design.md` để tránh lệch hệ màu.

## Make by

- https://github.com/oggyne259
