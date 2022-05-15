import React from "react";
import PropTypes from "prop-types";

function HeaderSidebar() {
  return (
    <div className="h-14 flex-shrink-0 bg-[#0e1f33] w-full text-white flex items-center justify-start">
      <img
        className="max-w-full w-3/4 h-4/6"
        src="https://fa-react-email-app.vercel.app/static/media/connect-logo-white.c4cdada4.svg"
      ></img>
    </div>
  );
}

export default HeaderSidebar;
