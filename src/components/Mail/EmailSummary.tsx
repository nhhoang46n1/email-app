import React, { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import messages from "../../data/messages.json";
import getFolder from "../common/getFolder";
import MailSumContent from "./MailSumContent/MailSumContent";

const EmailSummary: FC = () => {
  const [isActive, setIsActive] = useState<number>(0);
  const navigate = useNavigate();
  const location = useLocation();

  const folderTarget = getFolder(location.pathname);

  const handleOnClickEmail = (mail: any, index: number) => {
    navigate(`email/${folderTarget}/${mail._id}`);
    setIsActive(index);
  };

  let mail: any = [];
  messages.forEach((message) => {
    if (message.folder === folderTarget) {
      mail.push(message);
    }
  });

  return (
    <div className="">
      {mail.map((item: any, index: number) => (
        <div
          key={index}
          className={`${
            isActive === index ? "active-email-summary" : "text-gray-500"
          }`}
          onClick={() => handleOnClickEmail(item, index)}
        >
          <MailSumContent mail={item} index={index} isActive={isActive} />
        </div>
      ))}
    </div>
  );
};

export default EmailSummary;
