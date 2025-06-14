import React from "react";
import Button from "../components/Button";

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-[80vh] py-20 px-4 bg-background text-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-50">
        {/* <img
          src="/assets/hero-background.jpg"
          alt="신선한 농산물과 함께하는 사람들"
          className="w-full h-full object-cover"
        /> */}
      </div>

      <div className="relative z-10 mx-auto">
        <p className="block text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-text-main mb-4">
          농가 소득 증대<span className="hidden sm:inline">를 위한</span> <br />
          <span className="text-blue-600 block sm:inline">농산물 전문 </span>
          위탁 판매 서비스.
        </p>
        <p className="text-lg  lg:text-[28px] text-text-paragraph mb-4 md:mb-8 mx-auto break-keep">
          복잡한 판매는 저희에게 맡기고, 이제는 농산물 생산에만 집중하세요.
        </p>
        <Button
          onClick={() => onNavigate("contact-us")}
          className="text-md md:text-lg lg:text-[28px] bg-gray-300 px-6 py-3 md:px-8 md:py-4"
        >
          원클릭으로 유통고민 끝내기
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
