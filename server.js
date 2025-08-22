var chat;


chat = [];

const http = require("http");
const fs = require("fs").promises;
const url = require('url');

const my_data_path = __dirname + "/mydata";
fs.access(my_data_path).catch((e)=>{
  fs.mkdir(my_data_path);
});

http.createServer(async (rq,rs)=>{
const parsedURL = url.parse(rq.url, true);
  rs.setHeader("content-type","text/html; charset=UTF-8");
  if ((parsedURL.query?.name ?? "") != '') {
    chat.unshift(`<p>名前：${(parsedURL.query?.name ?? "")}</p>
      <p>食べ物：${(parsedURL.query?.food ?? "")}</p>`);
  }
  if (false) {
  } else if (true) {
    rs.write(`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sakura.css/css/sakura.css" type="text/css"><h1>テキストチャットを作ろう！</h1>
      <form action="" method="get" >  <p>
        <label for="name">名前を入力してください。<label>
        <input type="text" id="name" name="name"/>
        </p><p>
        <label for="food">好きな食べ物を教えてください。<label>
        <input type="text" id="food" name="food"/>
        </p><input type="submit"></form><h2>好きな食べ物一覧</h2>
      ${(chat.join(''))}`);
    rs.end();
  }
}).listen(process.env.PORT);
