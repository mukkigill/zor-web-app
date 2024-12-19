import icon1 from "../assets/icon-placeholder1.png";
import icon2 from "../assets/icon-placeholder2.png";
import icon3 from "../assets/icon-placeholder3.png";
import icon4 from "../assets/icon-placeholder4.png";
import icon5 from "../assets/icon-placeholder5.png";
import icon6 from "../assets/icon-placeholder6.png";
import regular1 from "../assets/placeholder1.png";
import regular2 from "../assets/placeholder2.png";
import regular3 from "../assets/placeholder3.png";
import regular4 from "../assets/placeholder4.png";
import landing1 from "../assets/landing-placeholder1.png";
import landing2 from "../assets/landing-placeholder2.png";
import landing3 from "../assets/landing-placeholder3.png";
import homepage from "../assets/homepage-hero.png";


export enum ImageType {
  icon,
  regular,
  landing,
  homepage
};

export const RandomPlaceholder = (type: ImageType = ImageType.regular) => {
  const placeholders = [];
  let defaultPlaceholder;
  if (type === ImageType.icon) {
    placeholders.push(icon1, icon2, icon3, icon4, icon5, icon6);
    defaultPlaceholder = icon1;
  } else if (type === ImageType.regular) {
    placeholders.push(regular1, regular2, regular3, regular4);
    defaultPlaceholder = regular1;
  } else if (type === ImageType.homepage) {
    placeholders.push(homepage);
    defaultPlaceholder = homepage;
  } else { // landing image, banner style
    placeholders.push(landing1, landing2, landing3);
    defaultPlaceholder = landing1;
  }

  return placeholders.at(Math.floor(Math.random() * placeholders.length)) ?? defaultPlaceholder;
}