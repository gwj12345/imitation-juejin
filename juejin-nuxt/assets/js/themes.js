// 主题切换
const cut = (cutcheck) => {
    document.getElementsByTagName("body")[0].style.setProperty("--backgroundColor", cutcheck ? "#121212" : "#f4f5f5");
    document.getElementsByTagName("body")[0].style.setProperty("--fontColor", cutcheck ? "#FFFFFFB3" : "#515767");
    document.getElementsByTagName("body")[0].style.setProperty("--buttonColor", cutcheck ? "#000" : "#fff");
    document.getElementsByTagName("body")[0].style.setProperty("--headerColor", cutcheck ? "#000" : "#fff");
    document.getElementsByTagName("body")[0].style.setProperty("--itemColor", cutcheck ? "#222" : "#fff");
    document.getElementsByTagName("body")[0].style.setProperty("--contentColor", cutcheck ? "#fff" : "#000");
    document.getElementsByTagName("body")[0].style.setProperty("--borderColor", cutcheck ? "#000" : "#f1f1f1");

    // document.getElementsByTagName("body")[0].style.setProperty("--tableColor", cutcheck ? "#000" : "#d8d8d8");
    // document.getElementsByTagName("body")[0].style.setProperty("--tablesColor", cutcheck ? "#222" : "#fff");
    // document.getElementsByTagName("body")[0].style.setProperty("--inputColor", cutcheck ? "#666" : "#fff");
    

};   
   export default cut;