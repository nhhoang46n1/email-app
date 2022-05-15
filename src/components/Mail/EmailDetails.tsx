import React, { FC } from "react";
import PropTypes from "prop-types";
import ButtonMailDetail from "../Mail/MailSumContent/ButtonMailDetail";
import { useLocation } from "react-router-dom";
import getAndCheckMail from "../common/getAndCheckMail";
import getMailDetail from "../common/getMailDetail";
import getAddressEmail from "../common/getAddressEmail";
import dayjs from "dayjs";
import randomAva from "../common/randomAva";
const EmailDetails: FC = () => {
  const location = useLocation();

  const mailId = getAndCheckMail(location.pathname);

  let mailMessage: any = getMailDetail(mailId);
  return (
    <>
      {mailMessage ? (
        <div className="grid grid-cols-12 p-6">
          <div className="col-span-12">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 ">
                <div className="">
                  <img
                    src={randomAva(mailMessage.senderName.first)}
                    alt=""
                    className="rounded-full h-[50px] w-[50px] object-cover"
                  />
                </div>
                <div className="">
                  <h6 className="text-md font-semibold">
                    {mailMessage.senderName.first +
                      " " +
                      mailMessage.senderName.last}
                  </h6>
                  <p className="text-sm text-gray-500 font-light">
                    {getAddressEmail(mailMessage.from)}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-sm text-gray-500 font-light">
                  {dayjs(mailMessage.date).format("HH:MM - MM/HH/YYYY")}
                </p>
                <div className="flex items-center justify-end gap-2">
                  <ButtonMailDetail />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12">
            <div className="py-12">
              <h2 className="text-4xl font-semibold mb-8">
                {mailMessage.subject}
              </h2>
              <div className="border-b pb-8">
                <p>{mailMessage.body}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default EmailDetails;
