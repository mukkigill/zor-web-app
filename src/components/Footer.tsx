import { useState, useEffect } from "react";
import { CmsFooter, fetchFooter } from "../contentful/fetchFooter";
import LogoLocal from "../assets/logo_footer.png"

import { RegularBodyText } from "./TextPresets"

export const Footer = (): JSX.Element => {
  const [data, setData] = useState({} as CmsFooter);

  useEffect(() => {
    async function fetchData() {
      setData(await fetchFooter());
    }
    fetchData();
  }, []);

  const email = data.email ?? "gill.mu@northeastern.edu";

  return (
    <div className="flex flex-row border-t-2 border-off-white px-8 md:px-16 md:py-8 justify-between items-center">
      <a href="/">
        <img src={data.logoURL ? `https:${data.logoURL}` : LogoLocal} alt="logo" width={100} height={100}></img>
      </a>
      <a href={`mailto:${email}`}>
        <RegularBodyText text={email} bold />
      </a>
    </div>
  );
}
