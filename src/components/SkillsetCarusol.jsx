import React from "react";
import SkillsetCard from "./custom/SkillsetCard";
function SkillsetCarusol() {
  return (
    <div className="flex w-full h-full gap-7">
      <div>
        <SkillsetCard />
      </div>
      <div>
        <SkillsetCard />
      </div>
    </div>
  );
}

export default SkillsetCarusol;
