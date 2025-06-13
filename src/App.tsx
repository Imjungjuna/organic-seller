// src/App.tsx
import React from "react";
import Header from "./components/Header";
import HeroSection from "./sections/HeroSection";
import OurDifferenceSection from "./sections/OurDifferenceSection";
import OurProcessSection from "./sections/OurProcessSection"; // 새로 추가
import TrustAndAssuranceSection from "./sections/TrustAndAssuranceSection"; // 새로 추가
import FAQSection from "./sections/FAQSection"; // 새로 추가
import ContactUsSection from "./sections/ContactUsSection"; // 새로 추가
import Footer from "./components/Footer"; // 새로 추가

const App: React.FC = () => {
  // 섹션으로 스크롤 이동 함수
  const handleNavigate = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 실제 구글 독스 링크 (이 부분을 본인의 링크로 변경하세요!)
  const GOOGLE_DOCS_LINK =
    "https://docs.google.com/forms/d/e/YOUR_GOOGLE_DOCS_FORM_LINK"; // <<<<<<<<<<<<<<< 중요: 실제 링크로 변경!

  return (
    <div className="font-sans text-[--color-text-main] bg-[--color-background]">
      <Header onNavigate={handleNavigate} />
      <main>
        <HeroSection onNavigate={handleNavigate} />
        <OurDifferenceSection />
        <OurProcessSection />
        <TrustAndAssuranceSection />
        <FAQSection />
        <ContactUsSection googleDocsLink={GOOGLE_DOCS_LINK} /> {/* 링크 전달 */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
