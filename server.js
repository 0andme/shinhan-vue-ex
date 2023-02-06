const http = require("http");
const fs = require("fs");

let mySet = function (request, response) {
  let url = request.url;
  if (url === "/") {
    url = "/index.html";
  }
  response.writeHead(200, {"Content-Type": "text/html"});
  const htmlFile = fs.readFileSync(__dirname + url);
  response.end(htmlFile);
};
//   http.createServer() > 서버 만드는 함수
const app = http.createServer(mySet);

app.listen(8080);
