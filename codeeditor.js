function run(){
    //inherit the all language(html,css,js & output)
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = document.getElementById("css-code").value;
    let JavaScriptCode = document.getElementById("js-code").value;
    let output = document.getElementById("output");
     //for html and css codes run
    output.contentDocument.body.innerHTML=htmlCode+ "<style>"+cssCode+"</style>";
    //for javacode run
    output.contentWindow.eval(JavaScriptCode);
}