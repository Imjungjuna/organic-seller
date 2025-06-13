// src/sections/HeroSection.tsx
import React from "react";
import Button from "../components/Button";

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-[70vh] py-20 px-4 bg-[--color-background] text-center overflow-hidden"
    >
      {/* 배경 이미지/영상 플레이스홀더 (이제 실제 이미지 경로를 사용) */}
      <div className="absolute inset-0 z-0 opacity-50">
        {" "}
        {/* opacity 조절로 텍스트 가독성 확보 */}
        <img
          src="/images/hero-background.jpg" // 이 경로에 이미지를 저장해야 합니다.
          alt="신선한 농산물과 함께하는 사람들"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* 텍스트 크기 조절: md:text-5xl, lg:text-6xl 로 조정 */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[--color-text-main] mb-4">
          <span className="block">농가 사장님의 소중한 수확물,</span>
          <span className="block text-[--color-primary-text]">
            쿠팡에서 최고의 가치로 판매해 드립니다.
          </span>
        </h1>
        {/* p 태그 텍스트 크기 조절: md:text-lg 로 조정 */}
        <p className="text-md md:text-lg text-[--color-text-paragraph] mb-8 max-w-2xl mx-auto">
          이제 시작하는 저희지만, **데이터 기반의 스마트한 분석**과 **야무진
          실행력**으로
          <br className="hidden md:block" />
          오직 결과로 보여드리겠습니다.
        </p>
        <Button
          onClick={() => onNavigate("contact-us")}
          className="text-base px-6 py-3 md:px-8 md:py-4"
        >
          지금 바로 무료 상담 신청하기
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
