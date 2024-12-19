import React from "react";
import { RegularBodyText, SmallBodyText } from "./TextPresets";

interface AdvisorMemberIntroProps {
  name: string;
  description: string;
}

const AdvisorIntro = ({ name, description }: AdvisorMemberIntroProps) => {
  return (
    <div>
      <div className="pb-5 text-orange">
        <RegularBodyText text={name} />
      </div>
      <SmallBodyText text={description} />
    </div>
  );
};

export default AdvisorIntro;
