import React from "react";
import FolderConstruction from "../Construction/FolderConstruction";
import FolderSidebar from "./FolderSidebar";
import HeaderSidebar from "./HeaderSidebar";
import MainSidebar from "./MainSidebar";

function Sidebar() {
  return (
    <div className="h-screen w-1/6 flex flex-col items-center fixed z-50 top-0 left-0 ">
      <HeaderSidebar />
      <div className="h-full flex items-center w-full">
        <div className="w-1/5 h-full bg-[#0e1f33] flex flex-col items-center justify-start">
          <MainSidebar />
        </div>
        <div className="w-4/5 h-full bg-[#152943] flex flex-col items-start justify-start">
          <FolderSidebar />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
