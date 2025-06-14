// src/sections/ContactUsSection.tsx
import React from "react";
import Button from "../components/Button";
import { Mail, Phone } from "lucide-react"; // 아이콘

interface ContactUsSectionProps {
  googleDocsLink: string; // 구글 독스 링크를 prop으로 받음
}

const ContactUsSection: React.FC<ContactUsSectionProps> = ({
  googleDocsLink,
}) => {
  return (
    <section
      id="contact-us"
      className="py-20 px-4 bg-[--color-hover-background]"
    >
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-[--color-text-main] mb-8">
          지금 바로{" "}
          <span className="text-[--color-primary-text]">무료 상담</span>{" "}
          신청하세요!
        </h2>
        <p className="text-lg md:text-xl text-[--color-text-paragraph] break-keep mb-12">
          농가 사장님의 소중한 수확물이 최고의 가치를 얻을 수 있도록,
          <br className="hidden md:block" />
          저희가 스마트하고 세심하게 도와드리겠습니다.
        </p>

        <Button
          onClick={() => window.open(googleDocsLink, "_blank")} // 새 탭으로 열기
          className="text-md md:text-[20px] bg-gray-300 px-6 py-3"
        >
          우리 농가 맞춤형 솔루션 문의하기
        </Button>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
          <div className="flex items-center space-x-3 text-[--color-text-main]">
            <Mail size={24} className="text-[--color-primary-text]" />
            <span className="text-lg md:text-lg">dalbichi9801@gmail.com</span>
          </div>
          <div className="flex items-center space-x-3 text-[--color-text-main]">
            <Phone size={24} className="text-[--color-primary-text]" />
            <span className="text-lg md:text-lg">010-4740-3604</span>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
