"use client";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { FaBars } from "react-icons/fa6";
import { Button } from "./Button";

interface Props {
  items: { name: string; href: string }[];
  path: string;
}

const NavDropdown = ({ items, path }: Props) => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  return (
    <div className="relative">
      <OutsideClickHandler
        onOutsideClick={() => {
          setShowDropDown(false);
        }}
      >
        <button onClick={toggleDropDown}>
          <FaBars color="white" />
        </button>
        {showDropDown && (
          <ul className="flex flex-col z-10 absolute items-end max-w-md right-0 mt-8"
            style={{ width: "auto" }}>
            {items.map((item, index) => {
              const activePage = path === item.href;
              return (
                <li key={index} style={{ width: "100%" }}>
                  <Button text={item.name} link={item.href} bold={activePage} underline={activePage} dropdown></Button>
                </li>
              );
            })}
          </ul>
        )}
      </OutsideClickHandler>
    </div>
  );
};

export default NavDropdown;