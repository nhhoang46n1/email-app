const getAddressEmail = (string: string) => {
    let start = string.indexOf('<');
    let end = string.indexOf('>');
  
    return string.slice(start + 1, end);
  };
  export default getAddressEmail;