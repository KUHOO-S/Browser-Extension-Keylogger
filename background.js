
function handleMessage(request){
    
    //alert(request.key);
    //alert(request.page);


    data="key="+request.key+"&page="+request.page;

    console.log(data);

    var xhr = new XMLHttpRequest();
    xhr.onload = function(){
        //alert(this.responseText);
    }
    var fd = new FormData();
    fd.append("key",request.key);
    fd.append("page",request.page);
    xhr.open("POST", "http://127.0.0.1:5000/postdata", true);
    xhr.send(fd);
    /*
    xhr.open("POST","localhost:5000/hmmm",true);
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xhr.send(data);
    */
}
chrome.runtime.onMessage.addListener(handleMessage);
/*
var xhr = new XMLHttpRequest();
    
    xhr.onload = function (e) {

        if (this.readyState === 4) {
            transtxt.innerHTML = e.target.responseText;
            
        }
    };
    stt = document.getElementById('STT');

    var fd = new FormData();
    fd.append("lang",lang);
    fd.append("text",stt.value);
    xhr.open("POST", "/translate", true);
    xhr.send(fd);
*/