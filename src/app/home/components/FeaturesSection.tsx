"use client";

import React from "react";

const coreFeatures = [
  {
    title: "AI Safety Analysis",
    desc: "Chấm điểm an toàn theo hồ sơ sức khỏe cá nhân và gia đình.",
    tone: "highlight",
  },
  {
    title: "Phân tích thành phần",
    desc: "Nhận diện thành phần đáng chú ý và giải thích bằng ngôn ngữ dễ hiểu.",
    tone: "default",
  },
  {
    title: "Cảnh báo cá nhân hóa",
    desc: "Cảnh báo dựa trên dị ứng, tình trạng sức khỏe và độ nhạy cảm của từng người.",
    tone: "default",
  },
  {
    title: "Gợi ý thay thế",
    desc: "Đề xuất lựa chọn phù hợp hơn khi sản phẩm hiện tại không an toàn.",
    tone: "default",
  },
];

const plans = [
  {
    tier: "FREE",
    subtitle: "Phù hợp cho cá nhân",
    price: "Miễn phí",
    cta: "Bắt đầu miễn phí",
    highlight: false,
    features: ["Quét barcode/QR cơ bản", "1 hồ sơ cá nhân", "Lịch sử quét 30 ngày"],
  },
  {
    tier: "PRO",
    subtitle: "Phù hợp cho người dùng thường xuyên",
    price: "35.000đ/tháng",
    cta: "Nâng cấp Pro",
    highlight: true,
    badge: "PHỔ BIẾN NHẤT",
    features: ["Tất cả tính năng FREE", "So sánh sản phẩm", "Phân tích AI nâng cao"],
  },
  {
    tier: "FAMILY",
    subtitle: "Phù hợp cho gia đình",
    price: "42.000đ/tháng",
    cta: "Chọn Family",
    highlight: false,
    family: true,
    features: ["Tất cả tính năng PRO", "3 hồ sơ thành viên", "Ưu tiên hỗ trợ"],
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-bg">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="mb-12 text-center">
          <p className="text-accent font-bold uppercase tracking-[0.22em] text-xs mb-3 font-sans">Tính năng cốt lõi</p>
          <h2 className="font-display font-black text-4xl sm:text-5xl leading-[1.05] tracking-tight text-primary">
            Một lần quét,
            <br />
            toàn bộ sự thật.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {coreFeatures.map((feature) => (
            <div
              key={feature.title}
              className={`rounded-3xl p-7 border ${feature.tone === "highlight" ? "text-white border-[#7fb3ff]/40 shadow-card-lg" : "bg-white border-neutral-border shadow-card"}`}
              style={feature.tone === "highlight" ? { background: "linear-gradient(135deg, #4a8cff 0%, #8a5cff 100%)" } : undefined}
            >
              <h3 className={`font-display text-2xl font-bold ${feature.tone === "highlight" ? "text-white" : "text-primary"}`}>{feature.title}</h3>
              <p className={`mt-2 text-sm leading-relaxed font-sans ${feature.tone === "highlight" ? "text-white/90" : "text-fg-muted"}`}>{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="text-center mb-10">
            <p className="text-accent font-bold uppercase tracking-[0.22em] text-xs mb-3 font-sans">Gói cước</p>
            <h2 className="font-display font-black text-4xl sm:text-5xl leading-[1.05] tracking-tight text-primary">
              Bắt đầu miễn phí,
              <br />
              nâng cấp khi cần.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 items-stretch">
            {plans.map((plan, idx) => (
              <div
                key={plan.tier}
                className={`rounded-3xl p-7 border relative ${
                  plan.highlight
                    ? "text-white border-[#7fb3ff] shadow-float scale-[1.02]"
                    : plan.family
                    ? "bg-[#eef3ff] border-[#d9e2ff]"
                    : "bg-white border-neutral-border"
                }`}
                style={plan.highlight ? { background: "linear-gradient(145deg, #4a8cff 0%, #8a5cff 100%)" } : undefined}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-[11px] font-black text-primary shadow-card">
                    {plan.badge}
                  </div>
                )}

                <p className={`font-sub text-xs uppercase tracking-[0.16em] font-bold ${plan.highlight ? "text-white/90" : "text-fg-muted"}`}>{plan.tier}</p>
                <h3 className={`font-display mt-3 text-3xl font-extrabold ${plan.highlight ? "text-white" : "text-primary"}`}>{plan.price}</h3>
                <p className={`font-sans mt-1 text-sm ${plan.highlight ? "text-white/90" : "text-fg-muted"}`}>{plan.subtitle}</p>

                <ul className="mt-5 space-y-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className={`mt-1 h-2.5 w-2.5 rounded-full ${plan.highlight ? "bg-white" : "bg-accent"}`} />
                      <span className={`text-sm font-sans ${plan.highlight ? "text-white/90" : "text-fg-muted"}`}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#download"
                  className={`mt-6 inline-flex w-full justify-center rounded-xl px-4 py-3 text-sm font-bold ${
                    plan.highlight ? "bg-white text-primary" : "brand-cta"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
