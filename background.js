
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

}
chrome.runtime.onMessage.addListener(handleMessage);
