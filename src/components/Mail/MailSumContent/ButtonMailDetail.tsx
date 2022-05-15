import React, { FC } from "react";
import PropTypes from "prop-types";

const ButtonMailDetail: FC = () => {
  return (
    <>
      <button
        className="flex items-center justify-center duration-100 shadow-md gap-2 px-4 py-2 text-md rounded-md   
    bg-gray-500 text-white hover:bg-gray-400 false "
      >
        Reply
      </button>
      <button
        className="flex items-center justify-center duration-100 shadow-md gap-2 px-4 py-2 text-md rounded-md   
    border border-green-500 text-green-500 hover:bg-green-200 false "
      >
        Foward
      </button>
      <button
        className="flex items-center justify-center duration-100 shadow-md gap-2 px-4 py-2 text-md rounded-md   
    border border-red-500 text-red-500 hover:bg-red-200 false "
      >
        Delete
      </button>
    </>
  );
};

export default ButtonMailDetail;
