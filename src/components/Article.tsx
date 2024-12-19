import { RandomPlaceholder } from "./RandomPlaceholder";
import { RegularBodyText, SmallBodyText } from "./TextPresets";

type Props = {
  imageSrc?: string;
  imageAlt?: string;
  headline: string;
  publisher?: string;
  link?: string;
}

export const Article = ({ imageSrc, imageAlt, headline, publisher, link }: Props): JSX.Element => {
  const image = <img src={imageSrc ?? RandomPlaceholder()} alt={imageAlt ?? 'image alt'}></img>;
  const newsItem = (
    <div className={`flex flex-col border-2 border-off-white p-4`}>
      <div className="flex flex-col items-center">{image}</div>
      <div className="text-wrap text-left pt-4 h-40 md:h-48">
        <div className="pb-2 line-clamp-1">
          <SmallBodyText text={publisher} />
        </div>
        <div className="line-clamp-4">
          <RegularBodyText text={headline} bold />
        </div>
      </div>
    </div>
  );
  if (link) {
    return (
      <a href={link} className="hover:underline decoration-orange">{newsItem}</a>
    );
  } else {
    return newsItem;
  }
}