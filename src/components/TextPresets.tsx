import ReactMarkdown from "react-markdown";

interface Props {
  text?: string;
  bold?: boolean;
}

const FONT = 'font-nimbus-sans';

const BaseText: React.FC<React.PropsWithChildren<Props>> = ({
  bold = false,
  children,
}) => {
  return (
    <div className={`${FONT} ${bold ? "font-bold" : ""}`}>
      {children}
    </div>
  );
};

// >= 95px
export const LargeHeaderText = ({ text, bold = false }: Props): JSX.Element => (
  <BaseText bold={bold}>
    <div className={`text-4xl sm:text-5xl md:text-6xl`}>{text}</div>
  </BaseText>
);

// 64px
export const RegularHeaderText = ({ text }: Props): JSX.Element => (
  <BaseText >
    <div className={`text-4xl md:text-5xl`}>{text}</div>
  </BaseText>
);

// 50px
export const SmallHeaderText = ({ text }: Props): JSX.Element => (
  <BaseText >
    <div className={`text-3xl md:text-4xl`}>
      {text}
    </div>
  </BaseText>
);

// 35px
export const LargeBodyText = ({ text, bold }: Props): JSX.Element => (
  <BaseText bold={bold}>
    <div className={`text-2xl md:text-3xl`}>
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  </BaseText>
);

// 25px
export const RegularBodyText = ({ text, bold }: Props): JSX.Element => (
  <BaseText bold={bold}>
    <div className={`text-xl md:text-2xl`}>
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  </BaseText>
);

// < 25px
export const SmallBodyText = ({ text, bold }: Props): JSX.Element => (
  <BaseText bold={bold} >
    <div className={`text-lg md:text-xl`}>
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  </BaseText>
)