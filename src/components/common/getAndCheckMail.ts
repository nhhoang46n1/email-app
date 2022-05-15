import getMailId from "./getMailId";

const getAndCheckMail = (pathname:any) => {
    let mailId;
    let mailIdList = getMailId();
    mailId = pathname.slice(pathname.lastIndexOf('/') + 1, pathname.length);
    console.log(mailId);
    return mailId
}


export default getAndCheckMail