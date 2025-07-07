// src/sections/TrustAndAssuranceSection.tsx
import React from "react";
import { ShieldCheck } from "lucide-react"; // 신뢰 아이콘

const TrustAndAssuranceSection: React.FC = () => {
  return (
    <section
      id="trust-assurance"
      className="py-30 bg-[--color-hover-background]"
    >
      <div className="container mx-auto text-center">
        <p className="text-4xl md:text-5xl font-semibold text-[--color-text-main] mb-12 break-keep">
          농가 사장님의 안심을 약속합니다.
        </p>
        <p className="text-lg md:text-xl text-[--color-text-paragraph] mb-16 max-w-3xl mx-auto">
          저희는 농가와의{" "}
          <span className="font-semibold">
            투명하고 신뢰 깊은 파트너십
          </span>
          을 최우선으로 생각하며,
          <br className="hidden md:block" />
          모든 과정에서 정직함과 책임감을 바탕으로 함께
          성장해 나갑니다.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
          <div className="flex flex-col items-center">
            <ShieldCheck
              size={64}
              className="text-[--color-primary-text] mb-6"
            />
            <h3 className="text-2xl font-bold text-[--color-text-main] mb-3">
              정식 사업자 등록
            </h3>
            <p className="text-[--color-text-paragraph] text-center max-w-sm">
              저희는 법인 등록을 마친 정식 사업체입니다.
              안심하고 농산물 판매를 맡겨주세요.
            </p>
          </div>

          {/* 사업자등록증 이미지 */}
          <div className="bg-[--color-background] rounded-xl p-6 shadow-xl border border-gray-100 flex flex-col items-center">
            <img
              src="/assets/business.png"
              alt="개인사업자 등록증"
              className="max-w-xs md:max-w-sm rounded-lg border border-gray-200 mb-4"
            />
            <p className="text-sm text-[--color-text-paragraph]">
              *일부 개인정보는 모자이크 처리되었습니다.
            </p>
            <p className="text-base text-[--color-text-main] font-semibold mt-2">
              통신판매업 신고번호: 제2025-성남분당B-0510호
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustAndAssuranceSection;
