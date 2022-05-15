
import a1 from "../../assets/1.jpg"
import a2 from "../../assets/2.jpg"
import a3 from "../../assets/3.jpg"
import a4 from "../../assets/4.jpg"
import a5 from "../../assets/5.jpg"
import a6 from "../../assets/6.jpg"
import a7 from "../../assets/7.jpg"

export default function randomAva(name:any) {
    let avatarAray = [a1, a2, a3, a4, a5, a6, a7];
  
    let rangeLetter = 25; 
    let avatarLength = avatarAray.length;
  
    let firstLetterName = name[0].toLowerCase();
    let charCode = firstLetterName.charCodeAt();
  
    let tempIndex = ((charCode - 97) / rangeLetter) * avatarLength;
    if (tempIndex === avatarLength) {
      tempIndex = avatarLength - 1;
    }
  
    return avatarAray[Math.round(tempIndex)];
  }