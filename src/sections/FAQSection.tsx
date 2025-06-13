// src/sections/FAQSection.tsx
import React, { useState } from "react";
import { ChevronDown } from "lucide-react"; // 아코디언 아이콘

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-6">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl font-semibold text-[--color-text-main]">
          {question}
        </span>
        <ChevronDown
          size={24}
          className={`text-[--color-text-main] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <p className="mt-4 text-[--color-text-paragraph] leading-relaxed">
          {answer}
        </p>
      )}
    </div>
  );
};

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "수수료는 어떻게 책정되나요?",
      answer:
        "농산물의 종류, 예상 판매량, 유통 난이도 등에 따라 협의 후 합리적인 수수료율을 책정합니다. 자세한 내용은 문의 시 상세히 안내해 드립니다.",
    },
    {
      question: "소량 위탁도 가능한가요?",
      answer:
        "네, 농가 사장님의 생산량에 맞춰 유연하게 위탁 판매를 진행하고 있습니다. 소량이라도 편하게 문의해주세요.",
    },
    {
      question: "정산 주기는 어떻게 되나요?",
      answer:
        "판매 데이터 취합 후 주간 또는 월간 단위로 정산이 진행됩니다. 투명하고 신속한 정산을 약속드립니다.",
    },
    {
      question: "판매 부진 시 어떻게 대응하나요?",
      answer:
        "저희는 데이터 분석을 통해 판매 부진 원인을 파악하고, 상세 페이지 개선, 프로모션 기획 등 적극적인 마케팅 전략을 제안하고 실행합니다.",
    },
  ];

  return (
    <section id="faq" className="py-20 px-4 bg-[--color-background]">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[--color-text-main] mb-12">
          자주 묻는 <span className="text-[--color-primary-text]">질문</span>
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
