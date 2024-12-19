import { HomePage } from "../Paths";
import { SmallBodyText } from "./TextPresets";

type Props = {
  text: string;
  link?: string;
  underline?: boolean;
  colour?: string;
  isPrimary?: boolean;
  isHeader?: boolean;
  bold?: boolean;
  dropdown?: boolean;
}

export const Button = ({ text, link, underline, colour, isPrimary = false, isHeader = false, bold = false, dropdown = false }: Props): JSX.Element => {
  let customisation = underline ? "underline underline-offset-8 hover:no-underline " : "";
  let natural = "";
  let hover = "";

  if (isHeader) { // header link
    hover = "hover:underline underline-offset-8 decoration-orange";
    colour = "text-white";
  } else if (dropdown) { // dropdown
    natural = "bg-black border border-off-white";
    hover = "hover:underline decoration-orange";
    colour = "text-white";
  } else { // primary vs secondary button
    if (isPrimary) {
      natural = `bg-white border-2 border-transparent`;
      hover = `hover:bg-inherit hover:border-off-white`;
    } else {
      natural = `border-2 border-off-white`;
      hover = `hover:bg-white hover:border-transparent`;
    }
  }
  return (
    <button className={`px-4 py-2 md:px-6 md:py-3 text-nowrap ${customisation} ${natural} ${hover}`}
      style={{ width: dropdown ? "100%" : "" }}>
      <a href={link ?? HomePage.path}>
        <SmallBodyText text={text} bold={bold} />
      </a>
    </button>
  );
}