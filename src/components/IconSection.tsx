import { ImageType, RandomPlaceholder } from './RandomPlaceholder';
import { LargeBodyText, SmallBodyText } from './TextPresets';

type Props = {
  imageSrc?: string;
  imageAlt?: string;
  text: string;
  link?: string;
  description?: string;
}

export const IconSection = ({ imageSrc, imageAlt, text, description, link }: Props): JSX.Element => {
  const image = <img src={imageSrc ?? RandomPlaceholder(ImageType.icon)} height={100} width={100} alt={imageAlt ?? 'image alt'}></img>;
  const item = (
    <div>
      <div className='py-4'>{image}</div>
      <div className='py-4 mb-4 text-left border-b-2 border-off-white'>
        <LargeBodyText text={text} bold />
      </div>
      <SmallBodyText text={description} />
    </div>
  );
  if (link) {
    return (
      <a href={link} className='hover:underline decoration-orange'>
        {item}
      </a>
    );
  } else {
    return item;
  }
}