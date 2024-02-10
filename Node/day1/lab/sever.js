const http = require('http');
const fs = require('fs');

http.createServer((req, res)=>{
    if(req.url != "/favicon.ico"){
        let url = req.url;
    // console.log(url);
        urlArr = url.split('/');  /// ['', 'add', '5', '4']
        if(urlArr[1] == 'add'){

            res.write(`result : ${urlArr[2]} + ${urlArr[3]} = ${(+urlArr[2]) + (+urlArr[3])}`);
            fs.appendFile("text.txt" ,`\nresult : ${urlArr[2]} + ${urlArr[3]} = ${(+urlArr[2]) + (+urlArr[3])}`,()=>{});
        }else  if(urlArr[1] == 'sub'){

            res.write(`result : ${urlArr[2]} - ${urlArr[3]} = ${(+urlArr[2]) - (+urlArr[3])}`);
            fs.appendFile("text.txt" ,`\nresult : ${urlArr[2]} - ${urlArr[3]} = ${(+urlArr[2]) - (+urlArr[3])}`,()=>{});
        }else  if(urlArr[1] == 'mul'){

            res.write(`result : ${urlArr[2]} * ${urlArr[3]} = ${(+urlArr[2]) * (+urlArr[3])}`);
            fs.appendFile("text.txt" ,`\nresult : ${urlArr[2]} * ${urlArr[3]} = ${(+urlArr[2]) * (+urlArr[3])}`,()=>{});
        }else  if(urlArr[1] == 'div'){

            res.write(`result : ${urlArr[2]} / ${urlArr[3]} = ${(+urlArr[2]) / (+urlArr[3])}`);
            fs.appendFile("text.txt" ,`\nresult : ${urlArr[2]} / ${urlArr[3]} = ${(+urlArr[2]) / (+urlArr[3])}`,()=>{});
        }

    }

    res.end();
    
}).listen(7000,()=>{console.log("listening on port 7000 ");});