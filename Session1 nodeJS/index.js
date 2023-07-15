const http=require("http");

http.createServer((request , response)=>{
//const url = request.url;
//const method=request.method;
const {url,method,body}=request;      //  as the same
if(url=="/home"&& method=="GET"){
    response.write("home page");
    response.end();
    //request.end("home page")  same as above , this is abbreviation
}
else if (url=="/about"&& method=="GET"){
    response.end("About page");
}
else if (url=="/delete"&& method=="GET"){
    response.end("delete page");
}
else if (url=="/adduser"&& method=="POST"){
    request.on("data" , (data)=>{
     console.log(data);
   // console.log("Buffer data" + data);
    console.log(JSON.parse(data));
    });
    response.end("adduser page");
}
else{
    response.end("404 page not found");
}
}).listen(3000,()=>{console.log("server is running");
});