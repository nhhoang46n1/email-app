import React, { FC } from "react";
import dayjs from "dayjs";
import randomAva from "../../common/randomAva";

interface IMailSumContent {
  mail: any;
  index: number;
  isActive: number;
}

const MailSumContent: FC<IMailSumContent> = ({ mail, index, isActive }) => {
  return (
    <div
      className="flex justify-start items-start w-full px-4 py-4 gap-4 border-b border-gray-300 cursor-pointer 
  false"
    >
      <div className="w-1/6">
        <div className="relative w-full pt-full rounded-full">
          <img
            src={randomAva(mail.senderName.first)}
            alt=""
            className="rounded-full w-[30px] h-[30px] object-cover"
          />
        </div>
      </div>
      <div className="w-5/6 flex flex-col items-start justify-between">
        <div className="flex items-center justify-between w-full text-sm font-medium">
          <p>{mail.senderName.first + " " + mail.senderName.last}</p>
          <p className="">{dayjs(mail.date).format("MM/HH/YYYY")}</p>
        </div>
        <div
          className={`text-md font-[700] w-full line-clamp-1 ${
            isActive === index ? "text-white" : "text-black"
          }`}
        >
          {mail.subject}
        </div>
        <div className="w-full">
          <p className="w-full text-sm line-clamp-3">{mail.body}</p>
        </div>
      </div>
    </div>
  );
};

export default MailSumContent;
