const http = require("http");
const fs = require("fs");

http
  .createServer()
  .on("request", (req, res) => {
    const fileStream = fs.createReadStream("./content/big.txt", "utf8");

    fileStream.on("open", () => {
      fileStream.pipe(res);
    });
    fileStream.on("error", () => {
      res.end(err);
    });
  })
  .listen(4000);
