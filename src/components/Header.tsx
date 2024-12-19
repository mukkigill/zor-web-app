import LogoLocal from "../assets/logo_local.png";
import { useLocation } from "react-router-dom";
import { HeaderButton } from "./HeaderLink";
import { AboutPage, HomePage, ImpactPage, ResourcesPage, TechnologyPage } from "../Paths";
import { CmsHeader, fetchHeader } from "../contentful/fetchHeader";
import { useEffect, useState } from "react";
import NavDropdown from "./NavDropdown";
import { Button } from "./Button";

export const Header = (): JSX.Element => {
  const path = useLocation().pathname;
  const [data, setData] = useState({} as CmsHeader);

  useEffect(() => {
    async function fetchData() {
      setData(await fetchHeader());
    }
    fetchData();
  }, []);

  const logoMobile = (
    <div className="visible md:hidden items-center">
      <a href={HomePage.path} className="justify-center">
        <img
          src={data.logoURL ? `https:${data.logoURL}` : LogoLocal}
          alt="logo"
          width={64}
          height={64}
        />
      </a>
    </div>
  );

  const logoLarger = (
    <div className="hidden md:flex items-center">
      <a href={HomePage.path} className="justify-center">
        <img
          src={data.logoURL ? `https:${data.logoURL}` : LogoLocal}
          alt="logo"
          width={80}
          height={80}
        />
      </a>
    </div>
  );

  const navbarMobile = (
    <div className="flex flex-row lg:hidden space-x-2 md:space-x-4 md:pr-10 items-center justify-between w-1/3">
      <div className="text-black hover:text-white"><Button text="Contact" link={AboutPage.path + "#contact"} isPrimary /></div>
      <div className="pr-4">
        <NavDropdown
          items={[
            {
              name: HomePage.name,
              href: HomePage.path,
            },
            {
              name: AboutPage.name,
              href: AboutPage.path,
            },
            {
              name: ImpactPage.name,
              href: ImpactPage.path,
            },
            {
              name: ResourcesPage.name,
              href: ResourcesPage.path,
            },
            {
              name: TechnologyPage.name,
              href: TechnologyPage.path,
            },
          ]}
          path={path}
        />
      </div>
    </div>
  );

  const navbarLarger = (
    <div className="hidden lg:flex text-white">
      <HeaderButton text={HomePage.name} link={HomePage.path} path={path} />
      <HeaderButton text={AboutPage.name} link={AboutPage.path} path={path} />
      <HeaderButton text={ImpactPage.name} link={ImpactPage.path} path={path} />
      <HeaderButton text={ResourcesPage.name} link={ResourcesPage.path} path={path} />
      <HeaderButton text={TechnologyPage.name} link={TechnologyPage.path} path={path} />
      <div className="text-black hover:text-white"><Button text={"Contact"} link={AboutPage.path + "#contact"} isPrimary /></div>
    </div>
  );

  return (
    <div className="flex relative justify-between p-8 border-b-2 border-off-white items-center">

      {/* logo for mobile */}
      {logoMobile}

      {/* logo for larger screens */}
      {logoLarger}

      {/* navbar for mobile */}
      {navbarMobile}

      {/* navbar for larger screens */}
      {navbarLarger}
    </div>
  )
};
