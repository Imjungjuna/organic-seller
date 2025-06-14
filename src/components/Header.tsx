import React from "react";
import Button from "./Button";
import { Menu } from "lucide-react"; // 햄버거 메뉴 아이콘

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background py-4 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="text-xl font-bold text-[--color-text-main]">
          <a href="#" onClick={() => onNavigate("hero")}>
            쿠팡 위탁셀러 (로고)
          </a>
        </div>

        {/* 네비게이션 메뉴 (데스크톱) */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="#who-we-are"
            className="text-[--color-text-main] hover:text-opacity-70 transition-colors"
            onClick={() => onNavigate("who-we-are")}
          >
            우리는
          </a>
          <a
            href="#how-we-help"
            className="text-[--color-text-main] hover:text-opacity-70 transition-colors"
            onClick={() => onNavigate("how-we-help")}
          >
            어떻게 돕나요
          </a>
          <a
            href="#contact-us"
            className="text-[--color-text-main] hover:text-opacity-70 transition-colors"
            onClick={() => onNavigate("contact-us")}
          >
            문의
          </a>
        </nav>

        {/* 문의 버튼 (데스크톱) */}
        <div className="hidden md:block">
          <Button onClick={() => onNavigate("contact-us")}>
            지금 바로 문의하기
          </Button>
        </div>

        {/* 모바일 햄버거 메뉴 (나중에 구현) */}
        <div className="md:hidden">
          <button className="text-[--color-text-main]">
            <Menu size={28} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
