self.addEventListener("install",(function(){console.log("install")})),self.addEventListener("activate",(function(){console.log("activate")})),self.addEventListener("fetch",(function(e){e.request.url.includes("main.css")&&(console.log("Fetch request for:",e.request.url),e.respondWith(new Response("body {\n                    margin-left : 1%;\n                    margin-right: 1%;\n                    margin-top  : 5%;\n                    color       : black;\n                }",{headers:{"Content-Type":"text/css"}})))}));