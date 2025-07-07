// src/sections/OurProcessSection.tsx
import React from "react";
import {
  FormInput,
  Contact,
  Package,
  DollarSign,
} from "lucide-react"; // 아이콘

const OurProcessSection: React.FC = () => {
  const steps = [
    {
      icon: (
        <FormInput
          size={40}
          className="text-[--color-primary-text]"
        />
      ),
      title: "1. 문의 & 상담",
      description:
        "편하게 문의해 주세요. 농가 상황과 농산물 특성에 맞는 맞춤형 솔루션을 상담합니다.",
    },
    {
      icon: (
        <Contact
          size={40}
          className="text-[--color-primary-text]"
        />
      ),
      title: "2. 전략 수립 & 계약",
      description:
        "데이터 기반으로 최적의 쿠팡 판매 전략을 수립하고, 투명하고 명확하게 계약을 진행합니다.",
    },
    {
      icon: (
        <Package
          size={40}
          className="text-[--color-primary-text]"
        />
      ),
      title: "3. 판매 & 관리",
      description:
        "상품 등록부터 상세 페이지 기획, 포장, 배송, 고객 응대까지 꼼꼼하게 관리하며 판매를 극대화합니다.",
    },
    {
      icon: (
        <DollarSign
          size={40}
          className="text-[--color-primary-text]"
        />
      ),
      title: "4. 투명한 정산",
      description:
        "판매 데이터와 약속된 주기에 맞춰 정확하고 신속하게 정산하여, 농가 사장님의 수익을 보장합니다.",
    },
  ];

  return (
    <section
      id="how-we-help"
      className="py-20 bg-[--color-background]"
    >
      <div className="container mx-auto text-center">
        <p className="mt-20 md:py-10 text-4xl md:text-5xl font-semibold text-[--color-text-main] mb-10 break-keep">
          위탁 판매, 이렇게 진행됩니다!
        </p>

        <div className="relative flex flex-col items-center md:flex-row md:justify-between space-y-12 md:space-y-0 md:space-x-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="hover:shadow-xl transition transform duration-300 relative z-10 bg-[--color-background] rounded-xl p-8 shadow-lg flex flex-col items-center max-w-sm w-full"
            >
              <div className="w-16 h-16 bg-[--color-hover-background] rounded-full flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-[--color-text-main] mb-3">
                {step.title}
              </h3>
              <p className="text-[--color-text-paragraph] text-center leading-relaxed break-keep">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcessSection;
