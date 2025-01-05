import http from "http";
const service = http.createService((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>hello world</h1>");
});
service.listen(4275, () => {
  console.log("server is running on port 4275");
});
