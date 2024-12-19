import { useState, useEffect } from "react";
import { CmsTechnology, fetchTechnology } from "../contentful/fetchTechnology";
import { LargeBodyText, LargeHeaderText } from "../components/TextPresets";
import Timeline from "../components/Timeline";
import Carousel, { CarouselItem } from "../components/Carousel";
import { Banner } from "../components/Banner";
import { ImageType, RandomPlaceholder } from "../components/RandomPlaceholder";

export const Technology = (): JSX.Element => {

  const [data, setData] = useState({} as CmsTechnology);

  useEffect(() => {
    async function fetchData() {
      setData(await fetchTechnology());
    }
    fetchData();
  }, []);


  if (!data) {
    return <LargeHeaderText text="Loading..." />;
  }

  if (data.errors) {
    return <p>{data.errors.map((error) => error.message).join(",")}</p>;
  }

  const carouselItems: CarouselItem[] = [];

  if (data.technology) {
    for (let i = 0; i < data.technology.length; i += 1) {
      const item: CarouselItem = {
        imageSrc: data.technologyImages?.at(i)?.fields.file?.url?.toString() ?? RandomPlaceholder(),
        imageAlt: data.technologyImages?.at(i)?.fields.description?.toString() ?? "image alt",
        title: data.technology.at(i)?.title ?? `Picture ${i + 1}`,
        caption: data.technology.at(i)?.caption,
      }
      carouselItems.push(item);
    }
  }

  return (
    <div className="flex flex-col">
      <Banner
        image={data.landingImage ? `URL(https:${data.landingImage.fields.file?.url})` : RandomPlaceholder(ImageType.landing)}
        title={data.mainHeader ?? ""}
      />
      <div className="p-16">
        <div className="py-8">
          <Timeline items={data.timeline ?? []}></Timeline>
        </div>
        <div className="text-center">
          <LargeBodyText text={data.technologyHeader} />
          <Carousel items={carouselItems} />
        </div>
      </div>
    </div>
  );
}