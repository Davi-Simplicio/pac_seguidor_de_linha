import React from "react";
import SearchInput from "./rightSideBarComponents/searchInput";
import ThemeSelect from "./rightSideBarComponents/themeSelect";
import FontChanger from "./rightSideBarComponents/fontChanger";
import PathSvg from "../../public/pathSvg";
import DogSvg from "../../public/dogSvg";

export default function RightSideBar() {
  return (
    <div className="h-11/12 2xl:w-96 xl:w-80 lg:w-96  w-0 flex flex-col justify-between  bg-foregroundLightMode dark:bg-foregroundDarkMode lg:border-2 border-detailsDarkerLightMode dark:border-detailsDarkerDarkMode rounded-lg mt-3 fixed">
      <div className="flex items-center flex-col gap-8 h-3/12">
        <SearchInput />
        <ThemeSelect />
        <FontChanger />
      </div>
        <div className="flex flex-col items-end 2xl:h-9/12 xl:h-8/12 md:">
          <PathSvg />
          <DogSvg />
        </div>
    </div>
  );
}
