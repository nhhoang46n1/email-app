import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MainSidebar = () => {
  const [isActive, setIsActive] = useState<number>(1);
  const iconSidebar = [
    { icon: '<i class="fa-solid fa-house-chimney"></i>', path: "home" },
    { icon: '<i class="fa-solid fa-envelope"></i>', path: "email" },
    { icon: '<i class="fa-solid fa-user"></i>', path: "contact" },
  ];

  const setClickActive = (index: number) => {
    setIsActive(index);
  };

  return (
    <>
      <ul className="text-white flex flex-col w-full h-full items-center justify-start font-light">
        {iconSidebar.map((item, index) => (
          <Link
            key={index}
            to={`/main/${item.path}`}
            className={`text-[14px] w-[100%] h-[56px] flex justify-center items-center ${
              isActive === index ? "bg-[#1d4ed8]" : ""
            }`}
            onClick={() => setClickActive(index)}
          >
            {<div dangerouslySetInnerHTML={{ __html: item.icon }}></div>}
          </Link>
        ))}
      </ul>
    </>
  );
};

export default MainSidebar;
