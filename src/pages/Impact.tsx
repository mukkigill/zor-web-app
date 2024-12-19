import { useEffect, useState } from "react";
import ImpactArea, { ImpactAreaType } from "../components/ImpactArea";
import { LargeHeaderText, SmallHeaderText } from "../components/TextPresets";
import { CmsImpact, fetchImpact } from "../contentful/fetchImpact";
import { Banner } from "../components/Banner";
import { ImageType, RandomPlaceholder } from "../components/RandomPlaceholder";

export const Impact = (): JSX.Element => {
  const [data, setData] = useState({} as CmsImpact);

  useEffect(() => {
    async function fetchData() {
      setData(await fetchImpact());
    }

    fetchData();
  }, []);


  if (!data) {
    return <LargeHeaderText text="Loading..." />;
  }

  if (data.errors) {
    return <p>{data.errors.map((error) => error.message).join(",")}</p>;
  }

  return (
    <div className="flex flex-col">
      {/* Banner */}
      <Banner
        image={data.landingImage ? `URL(https:${data.landingImage.fields.file?.url})` : RandomPlaceholder(ImageType.landing)}
        title={data.mainHeader ?? "Impact"}
      />
      <div className="px-10 pt-10">

        {/* Impact Areas */}
        <div className="pb-20 pt-20 space-y-20">
          {data.impactAreas?.map((val, index) =>
            <ImpactArea
              key={index}
              impactAreaType={ImpactAreaType[val.type as keyof typeof ImpactAreaType]}
              impactStat={val.stat}
              isLeft={val.isLeft}
              impactDescription={val.description}
              imageSrc={data.impactAreaImages?.at(index)?.fields.file?.url?.toString()}
              imageAlt={data.impactAreaImages?.at(index)?.fields.description?.toString() ?? "placeholder"}
            />
          )}
        </div>
      </div>

      {/* Growth Visualisation */}
      <div className="px-8 md:px-24 pb-16">
        <div className="md:px-16 pb-16">
          <SmallHeaderText text={data.growthHeader} />
        </div>
        <img
          src={data.growthVisualization?.fields.file?.url?.toString() ?? RandomPlaceholder(ImageType.landing)}
          alt={data.growthVisualization?.fields.description?.toString() ?? 'placeholder'}>
        </img>
      </div>
    </div>
  )
}

