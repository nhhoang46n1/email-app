const folders = ["inbox", "travel", "personal", "finance", "spam"];

const getFolder = (pathname:string) => {
    let folderName;
    folders.forEach(value => {
        if(pathname.indexOf(value) > -1) {
            folderName = value
        }
    })
    return folderName   

}

export default getFolder