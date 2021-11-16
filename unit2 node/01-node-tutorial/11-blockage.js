const { read } = require("fs");
const http = require("http");
const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.end("home page");
      break;
    case "/about":
      setTimeout(() => {
        for (let i = 0; i < 1000; i++) {
          for (let j = 0; j < 1000; j++) {
            console.log(`${i} ${j}`);
          }
        }
      }, 0);

      res.end("about");
      break

    default:
      res.end("404");
  }
});

server.listen(5000, () => {
  console.log("server is listening on port 5000");
});
