import React, { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import profile from "../../assets/profile.jpg";

const Header: FC = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();

  function isClicked() {
    navigate("/login");
  }

  return (
    <div className="fixed top-0 right-0 w-5/6 h-14 bg-white border-b z-20">
      <div className="w-full h-full flex items-center justify-between pl-4 pr-6 gap-3">
        <div>
          Pathname: <span className="font-bold">{pathname}</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex flex-col justify-end items-end">
            <h6 className="font-bold text-sm">Jonathan Kyle</h6>
            <p className="text-sm text-gray-500 mb-0">test1@test.com</p>
          </div>
          <div className="relative">
            <img src={profile} alt="" className="rounded-full w-10 h-10" />
          </div>
          <button
            className="flex items-center justify-center duration-100 shadow-md gap-2 px-4 py-2 text-md rounded-md   
    bg-red-500 text-white hover:bg-red-400 false"
            onClick={isClicked}
          >
            <i className="fa-solid fa-power-off"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
