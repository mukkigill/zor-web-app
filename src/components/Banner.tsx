import { LargeHeaderText } from "./TextPresets";

interface Props {
  image: string;
  title: string;
}

export const Banner = ({ image, title }: Props): JSX.Element => {

  const mobile = (
    <div className="flex flex-col md:hidden border-b-2 border-off-white">
      <div className="bg-cover bg-center h-40"
        style={{
          backgroundImage: image,
        }}>
        <div className="mt-24 px-4 ml-8 ">
          <LargeHeaderText text={title} />
        </div>
      </div>
    </div>
  );

  const larger = (
    <div className="flex flex-col border-b-2 border-off-white">
      <div className="hidden md:flex flex-col relative bg-cover h-80"
        style={{
          backgroundImage: image,
        }}>
        <div className="absolute left-16 bottom-12 px-20 ms-14 ">
          <LargeHeaderText text={title} />
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {mobile}
      {larger}
    </div>
  );
}