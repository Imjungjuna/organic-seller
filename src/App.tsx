import React from "react";
import Header from "./components/Header";
import HeroSection from "./sections/HeroSection";
import OurDifferenceSection from "./sections/OurDifferenceSection";
import OurProcessSection from "./sections/OurProcessSection";
import TrustAndAssuranceSection from "./sections/TrustAndAssuranceSection";
import FAQSection from "./sections/FAQSection";
import ContactUsSection from "./sections/ContactUsSection";
import Footer from "./components/Footer";

const App: React.FC = () => {
  // 섹션으로 스크롤 이동 함수
  const handleNavigate = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const GOOGLE_DOCS_LINK =
    "https://docs.google.com/forms/d/e/YOUR_GOOGLE_DOCS_FORM_LINK";

  return (
    <div className="text-text-main bg-background">
      <Header onNavigate={handleNavigate} />
      <main className="max-w-[1440px] mx-5 sm:mx-auto flex-row items-center">
        <HeroSection onNavigate={handleNavigate} />
        <OurDifferenceSection />
        <OurProcessSection />
        <TrustAndAssuranceSection />
        <FAQSection />
        <ContactUsSection googleDocsLink={GOOGLE_DOCS_LINK} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
