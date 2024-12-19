import { Button } from "./Button";

interface Props {
  text: string;
  link: string;
  path: string;
}

export const HeaderButton = ({ text, link, path }: Props): JSX.Element => (
  <div className={path === link ? "font-bold" : ""}>
    <Button text={text} link={link} underline={path === link} isHeader />
  </div>
);