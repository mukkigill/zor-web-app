import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { IconSection } from "../components/IconSection";
import { CmsHomepage, fetchHomepage } from "../contentful/fetchHomepage";
import { LargeHeaderText, RegularHeaderText, LargeBodyText, SmallBodyText } from "../components/TextPresets";
import { Article } from "../components/Article";
import { ImageType, RandomPlaceholder } from "../components/RandomPlaceholder";

export const Home = (): JSX.Element => {

  const [data, setData] = useState({} as CmsHomepage);

  useEffect(() => {
    async function fetchData() {
      setData(await fetchHomepage());
    }
    fetchData();
  }, []);


  if (!data) {
    return <LargeHeaderText text="Loading..." />;
  }

  if (data.errors) {
    return <p>{data.errors.map((error) => error.message).join(",")}</p>;
  }

  const heroMobile = (
    <div className="flex flex-col md:hidden relative bg-cover bg-center items-center justify-center p-64"
      style={{
        backgroundImage: data.landingImageMobile ? `URL(https:${data.landingImageMobile.fields.file?.url})` : RandomPlaceholder(ImageType.homepage),
      }}>
      <div className="absolute left-0 w-1/2 bottom-8 px-4 ml-8 mb-24 sm:mb-20">
        <LargeHeaderText text={data.mainHeader ?? ""} />
      </div>
    </div>
  );

  const heroLarger = (
    <div className="hidden md:flex flex-col relative bg-cover bg-center h-screen items-center justify-center p-64"
      style={{
        backgroundImage: data.landingImage ? `URL(https:${data.landingImage.fields.file?.url})` : RandomPlaceholder(ImageType.homepage),
      }}>
      <div className="absolute left-24 bottom-56 px-4 w-1/2 lg:w-1/3">
        <LargeHeaderText text={data.mainHeader ?? ""} />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col">

      {/* hero section */}
      {heroMobile}
      {heroLarger}

      {/* story and mission section */}
      <div className="flex flex-col lg:flex-row bg-cover bg-center bg-purple items-center justify-center py-16 px-4 lg:pr-24 space-y-8 lg:space-x-8 lg:space-y-0">
        <div className="flex flex-col lg:w-1/2">
          <div className="text-center pb-8">
            <RegularHeaderText text={data.sectionHeader} />
          </div>
          <div className="flex flex-row items-center align-middle justify-center space-x-4">
            {data.internalLinks?.map((item, index) => (
              <div className={item.isPrimary ? `text-purple hover:text-white` : `text-white hover:text-purple`}>
                <Button key={index} text={item.title} link={item.link} isPrimary={item.isPrimary}></Button>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col text-center lg:text-left lg:w-1/2">
          <SmallBodyText text={data.sectionText} />
        </div>
      </div>


      {/* facts section */}
      <div className="flex flex-row bg-cover bg-center items-center justify-center">

        <div className="flex flex-col items-center justify-evenly space-x-4 pt-4">

          <div className="grid grid-cols-1 md:grid-cols-3 items-start justify-between md:space-x-16 p-16">
            {data.facts?.map((item, index) => {
              return <IconSection key={index} text={item.title} link={item.link} description={item.description} imageSrc={data.factImages?.at(index)?.fields.file?.url?.toString()} />
            })}
          </div>

          <div className="md:pt-8 hover:text-black">
            <Button text={data.technology?.title ?? "Technology"} link={data.technology?.link} />
          </div>
        </div>
      </div>

      {/* news section */}
      <div className="flex flex-col p-16 sm:p-8">
        <div className="text-center md:pl-8 md:pb-8 md:text-left">
          <LargeBodyText text={data.newsHeader} />
        </div>
        <div className="grid grid-cols-1 place-items-start p-8 sm:grid-cols-2 lg:grid-cols-3 items-center align-top justify-center gap-8"
          style={{ height: "auto" }}>
          {data.news?.map((item, index) => {
            return (
              <div key={index} style={{
                height: "100%",
              }}>
                <Article headline={item.headline} publisher={item.publisher} link={item.link} imageSrc={data.newsImages?.at(index)?.fields.file?.url?.toString()} />
              </div>
            )
          })}
        </div>
      </div>

    </div>
  );
};
