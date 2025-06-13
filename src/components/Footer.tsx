// src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[--color-text-main] py-10 px-4 text-white text-center">
      <div className="container mx-auto">
        <p className="text-lg font-bold mb-2">쿠팡 농수산물 위탁셀러</p>
        <p className="text-sm text-gray-400 mb-1">대표: [대표자 이름]</p>{" "}
        {/* 실제 대표자 이름으로 변경 */}
        <p className="text-sm text-gray-400 mb-4">
          사업자등록번호: [사업자등록번호] | 통신판매업신고: [신고번호]
        </p>{" "}
        {/* 실제 사업자등록번호 및 신고번호로 변경 */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} 쿠팡 농수산물 위탁셀러. All rights
          reserved.
        </p>
        {/* 선택 사항: 개인정보처리방침, 이용약관 링크 등 */}
        {/* <div className="mt-4 space-x-4 text-sm">
          <a href="#" className="text-gray-400 hover:text-gray-200">개인정보처리방침</a>
          <a href="#" className="text-gray-400 hover:text-gray-200">이용약관</a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
