import React from "react";
interface SkillsetCardProps {
  one: string;
  two: string;
  three: string;
}
function SkillsetCard({ one, two, three }: SkillsetCardProps) {
  return (
    <div className="flex flex-col w-full h-auto p-6 border border-black-100 rounded-xl my-4">
      <div className="w-full font-[Lato] font-semibold text-[16px] leading-[19.2px] tracking-[0px] mb-2">
        {one}
      </div>
      <div className="w-full font-Lato font-bold text-4xl leading-[33.6px] tracking-[0px] mb-3">
        {two}
      </div>
      <div className="font-[Lato] font-medium text-xl leading-[16.8px] tracking-[0px] text-black-100">
        {three}
      </div>
    </div>
  );
}

export default SkillsetCard;
