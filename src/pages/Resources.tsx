import { halfParagraph } from "../components/LoremIpsum";
import { LargeHeaderText, SmallBodyText, SmallHeaderText } from '../components/TextPresets';
import { CmsResources, fetchResources } from '../contentful/fetchResources';
import { useEffect, useState } from 'react';
import { Banner } from "../components/Banner";
import { Article } from "../components/Article";
import { ImageType, RandomPlaceholder } from "../components/RandomPlaceholder";


export const Resources = (): JSX.Element => {

  const [data, setData] = useState({} as CmsResources);

  useEffect(() => {
    async function fetchData() {
      setData(await fetchResources());
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

      {/* Hero Section */}
      <Banner
        image={data.landingImageMobile ? `URL(https:${data.landingImageMobile.fields.file?.url})` : RandomPlaceholder(ImageType.landing)}
        title={data.mainHeader ?? ""}
      />

      {/* About Epilepsy */}
      <div className="p-16 md:pt-36">
        <SmallHeaderText text={data.primarySectionHeader ?? "About Epilepsy"} />
        <div className='pt-12'>
          <SmallBodyText text={data.primarySectionBody ?? halfParagraph} />
        </div>
      </div>

      {/* Resources */}
      <div className="px-16 pt-8">
        <SmallHeaderText text={data.resourcesSectionTitle ?? "Resources"} />
      </div>

      {/* Resource Section */}
      <div className="flex flex-col p-16">
        <div className="grid grid-cols-1 items-start sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.resourcesData?.map((item, index) => {
            let numImgs = data.resourcesImages?.length ?? 0;
            return (
              <div key={index}>
                <Article
                  headline={item.headline}
                  publisher={item.publisher}
                  link={item.link}
                  imageSrc={data.resourcesImages?.at(index % numImgs)?.fields.file?.url?.toString()}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};