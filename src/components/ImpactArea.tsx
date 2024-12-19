import { twoLines } from "./LoremIpsum";
import { RandomPlaceholder } from "./RandomPlaceholder";
import { LargeHeaderText, SmallBodyText } from "./TextPresets";

export enum ImpactAreaType {
  PERCENTAGE = "percentage",
  DOLLAR = "dollar"
}

interface ImpactAreaProps {
  imageSrc?: string;
  imageAlt?: string;
  impactAreaType: ImpactAreaType;
  impactStat: string;
  impactDescription?: string;
  isLeft?: boolean; // TRUE == text on left side, image on right side
}

const ImpactArea = ({
  imageSrc = RandomPlaceholder(),
  imageAlt = "imagePlaceholder",
  impactAreaType,
  impactStat,
  impactDescription = twoLines,
  isLeft = true
}: ImpactAreaProps) => {

  const component = (
    <div className="flex flex-col md:w-1/2 w-full py-4 md:py-24">
      <div className="pb-5">
        <LargeHeaderText
          text={impactAreaType === ImpactAreaType.PERCENTAGE ? `${impactStat}%` : `$${impactStat}`}
          bold
        />
      </div>
      <div className="text-orange">
        <SmallBodyText text={impactDescription} />
      </div>
    </div>
  );

  return (

    <div className="flex flex-col md:flex-row md:justify-between space-x-0 lg:space-x-16">
      {isLeft && (
        <div className="hidden md:flex md:w-1/2 w-full items-center justify-center">
          {component}
        </div>
      )}
      <img src={imageSrc} alt={imageAlt} className="w-full sm:w-1/2" />
      {!isLeft && (
        <div className="md:w-1/2 w-full place-items-center">{component}</div>
      )}
      {isLeft && (
        <div className="sm:flex md:hidden w-full items-center justify-center">
          {component}
        </div>
      )}
    </div>
  );
}

export default ImpactArea;
