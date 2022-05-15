import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import EmailConstruction from "../Construction/EmailConstruction";
import EmailDetails from "./EmailDetails";
import EmailSummary from "./EmailSummary";

function Mail() {
  const location = useLocation();
  const [isContruction, setIsContruction] = useState(false);

  useEffect(() => {
    if (location.pathname.indexOf("email") === -1) {
      setIsContruction(true);
    } else {
      setIsContruction(false);
    }
  }, [location.pathname]);

  return (
    <>
      <div className="w-1/6 h-screen "></div>
      <div className="w-5/6 h-screen flex flex-col justify-start items-center relative overflow-hidden">
        <div className=" flex items-center h-full w-full">
          {isContruction ? (
            <EmailConstruction />
          ) : (
            <>
              <div className="w-1/4 h-full border-r border-gray-300 top-14 relative overflow-hidden">
                <div className="overflow-scroll relative scroll-email-summary">
                  <EmailSummary></EmailSummary>
                </div>
              </div>
              <div className="w-3/4 h-full top-14 relative">
                <EmailDetails></EmailDetails>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Mail;
