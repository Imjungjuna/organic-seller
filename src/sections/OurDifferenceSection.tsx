import React from "react";
import { BarChart2, CheckCircle, Handshake } from "lucide-react";

const OurDifferenceSection: React.FC = () => {
  const features = [
    {
      icon: <BarChart2 size={48} className="text-[--color-primary-text]" />,
      title: "똑똑한 데이터 분석",
      description:
        "쿠팡 트렌드와 시장 데이터를 정밀 분석하여, 농가 사장님께 최적의 판매 전략을 제시합니다.",
    },
    {
      icon: <CheckCircle size={48} className="text-[--color-primary-text]" />,
      title: "섬세한 실행력과 꼼꼼함",
      description:
        "복잡한 상품 등록, 포장, 배송, 고객 응대까지 모든 과정을 빈틈없이 처리하여 효율을 높입니다.",
    },
    {
      icon: <Handshake size={48} className="text-[--color-primary-text]" />,
      title: "진심 어린 소통과 상생",
      description:
        "농가 사장님과의 긴밀한 소통을 통해 어려움을 함께 해결하고, 함께 성장하는 파트너가 되겠습니다.",
    },
  ];

  return (
    <section id="who-we-are" className="bg-[--color-hover-background]">
      <div className="py-20 container mx-auto text-center">
        <p className="mt-20 leading-[1.2] text-4xl md:text-5xl font-semibold text-[--color-text-main] sm:mb-24 mb-16">
          왜 저희에게 맡기셔야 할까요? <br className="hidden md:block" />
          <span className="text-text-main border-b-8 border-primary">
            똑똑하고 빈틈없는 판매관리
          </span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[--color-background] rounded-xl p-8 shadow-lg flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-[--color-text-main] mb-4">
                {feature.title}
              </h3>
              <p className="text-[--color-text-paragraph] text-center leading-relaxed break-keep">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurDifferenceSection;
