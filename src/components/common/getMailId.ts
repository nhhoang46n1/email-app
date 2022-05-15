import messages from '../../data/messages.json'


const getMailId = () => {
    let mailId:any = []
    messages.forEach((mail) => {
        mailId.push(mail._id)
    })
    return mailId;
}

export default getMailId;