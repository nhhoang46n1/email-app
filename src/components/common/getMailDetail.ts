import messages from '../../data/messages.json';

const getMailDetail = (mailId:any) => {
  let mailDetail;
    console.log(mailId)
  messages.forEach((mail) => {
    if (mail._id === mailId) {
      mailDetail = mail;
    }
  });
  return mailDetail;
};

export default getMailDetail;