import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import FolderConstruction from "../Construction/FolderConstruction";

const FolderSidebar: React.FC = () => {
  const [isActive, setIsActive] = useState<number>(11);
  const [isContruction, setIsContruction] = useState(false);

  const folders = ["inbox", "travel", "personal", "finance", "spam"];
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.indexOf("email") === -1) {
      setIsContruction(true);
    } else {
      setIsContruction(false);
    }
  }, [location.pathname]);

  const setActive = (index: number) => {
    setIsActive(index);
  };
  return (
    <>
      {isContruction ? (
        <FolderConstruction />
      ) : (
        <ul className="text-white flex flex-col w-full items-center justify-center  font-light">
          {folders.map((folder, index) => (
            <Link
              key={index}
              to={`email/${folder}`}
              className={`w-[100%] h-[56px] flex items-center capitalize pl-12 ${
                isActive === index ? "bg-[#1d4ed8]" : "text-white"
              }`}
              onClick={() => setActive(index)}
            >
              {folder}
            </Link>
          ))}
        </ul>
      )}
    </>
  );
};

export default FolderSidebar;
