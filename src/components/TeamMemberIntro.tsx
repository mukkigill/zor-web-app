import { RandomPlaceholder } from "./RandomPlaceholder";
import { LargeBodyText, RegularBodyText, SmallBodyText } from "./TextPresets";

interface TeamMemberIntroProps {
  imageSrc?: string;
  imageAlt?: string;
  name: string;
  role: string;
  description: string;
}

const TeamMemberIntro = ({
  imageSrc,
  imageAlt,
  name,
  role,
  description,
}: TeamMemberIntroProps) => {
  return (
    <div className={"flex flex-col"}>
      <img
        src={imageSrc ?? RandomPlaceholder()}
        alt={imageAlt ?? "image alt"}
      />
      <div className="pb-1">
        <LargeBodyText text={name} />
      </div>
      <div className="pb-5 text-orange">
        <RegularBodyText text={role} />
      </div>
      <hr className="border-solid border-off-white border-2 w-full" />
      <div className="pt-7">
        <SmallBodyText text={description} />
      </div>
    </div>
  );
};

export default TeamMemberIntro;
