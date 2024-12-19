import { useEffect, useState } from "react";
import TeamMemberIntro from "../components/TeamMemberIntro";
import {
  SmallHeaderText,
  RegularBodyText,
  LargeHeaderText,
  SmallBodyText,
} from "../components/TextPresets";
import { CmsAbout, fetchAbout } from "../contentful/fetchAbout";
import AdvisorIntro from "../components/AdvisorIntro";
import ContactForm from "../components/ContactForm";
import { Banner } from "../components/Banner";
import { ImageType, RandomPlaceholder } from "../components/RandomPlaceholder";

const About = () => {
  const [data, setData] = useState({} as CmsAbout);

  useEffect(() => {
    async function fetchData() {
      setData(await fetchAbout());
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
      {/* Landing Image */}
      <Banner
        image={data.landingImage ? `URL(https:${data.landingImage.fields.file?.url})` : RandomPlaceholder(ImageType.landing)}
        title={data.mainHeader ?? "About Us"}
      />

      {/* Why Us */}
      <div
        className="hidden sm:flex flex-col relative bg-cover lg:flex-row h-5/6 items-left justify-center p-32"
        style={{
          backgroundImage: data.missionImage
            ? `URL(https:${data.missionImage.fields.file?.url})`
            : "",
        }}
      >
        <div className={"lg:w-1/2"}>
          <img
            src={
              data.missionPortrait
                ? data.missionPortrait?.fields.file?.url?.toString()
                : RandomPlaceholder()
            }
            height={300}
            width={300}
            alt={"missionPortrait"}
          />
        </div>
        <div className="lg:w-1/2">
          <div className="md:pt-10 lg:pt-0 pb-10 pt-4">
            <SmallHeaderText text={data.missionHeader} />
          </div>
          <SmallBodyText text={data.missionBody} />
        </div>
      </div>

      <div
        className="flex sm:hidden flex-col relative bg-cover xl:flex-row items-center justify-center "
        style={{
          backgroundImage: data.missionImage
            ? `URL(https:${data.missionImage.fields.file?.url})`
            : "",
        }}
      >
        <img
          src={
            data.missionPortrait
              ? data.missionPortrait?.fields.file?.url?.toString()
              : RandomPlaceholder()
          }
          height={300}
          width={300}
          alt={"missionPortrait"}
          className="py-8"
        />
        <div className="">
          <SmallHeaderText text={data.missionHeader} />
        </div>
        <div className="p-12">
          <RegularBodyText text={data.missionBody} />
        </div>
      </div>

      {/* Core Values */}
      <div className="hidden sm:flex flex-row pb-24">
        {data.values?.map((value, idx) => (
          <div
            className={`border-off-white ${idx === 0 && "border-r-2"
              }  ${idx === data.values!.length - 1 && "border-l-2"
              } border-y-2 w-1/${data.values?.length.toString()} flex-row items-center justify-center`}
            key={idx}
          >
            <div className="flex flex-col items-center sm:p-12">
              <img
                src={
                  data.valueIcons
                    ? data.valueIcons?.at(idx)?.fields.file?.url?.toString()
                    : RandomPlaceholder(ImageType.icon)
                }
                height={200}
                width={200}
                alt={"coreValue1"}
              />
              <RegularBodyText text={value.title} />
            </div>
          </div>
        ))}
      </div>

      <div className="flex-col sm:hidden pb-24">
        {data.values?.map((value, idx) => (
          <div className={`flex-row items-center justify-center`} key={idx}>
            <div className="flex flex-col items-center p-3">
              <img
                src={
                  data.valueIcons
                    ? data.valueIcons?.at(idx)?.fields.file?.url?.toString()
                    : RandomPlaceholder(ImageType.icon)
                }
                height={200}
                width={200}
                alt={"coreValue1"}
              />
              <SmallBodyText text={value.title} />
            </div>
          </div>
        ))}
      </div>

      {/* Team */}
      <div className="flex flex-col px-24">
        <div className="sm:pb-12">
          <SmallHeaderText text={data.teamHeader} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 pb-10">
          {data.teamList?.map((member, idx) => (
            <div key={idx} className="sm:px-3 md:px-6 lg:px-12 xl:px-20">
              <TeamMemberIntro
                name={member.name}
                role={member.role}
                description={member.bio}
                imageSrc={
                  data.teamPictures
                    ? data.teamPictures?.at(idx)?.fields.file?.url?.toString()
                    : RandomPlaceholder()
                }
                imageAlt="teamMemberPortrait"
              />
            </div>
          ))}
        </div>
      </div>

      {/* advisors and mentors section */}
      <div className="p-16">
        <div className="pb-16">
          <SmallHeaderText text={data.advisorHeader} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row gap-10">
          {data.advisors?.map((adv, idx) => (
            <div key={idx}>
              <AdvisorIntro name={adv.name} description={adv.bio} />
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="p-16" id="contact">
        <div className="pb-16">
          <SmallHeaderText text={data.contactHeader} />
        </div>
        <ContactForm
          contactEmail={
            data.contactEmail ? data.contactEmail : "gill.mu@northeastern.edu"
          }
        />
      </div>
    </div>
  );
};

export default About;
