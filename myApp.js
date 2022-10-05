let express = require('express');
let app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/json', (req,res) => {
  let msg = process.env.MESSAGE_STYLE === "uppercase"?"HELLO JSON" : "Hello json";
  res.json({"message": msg});
});

app.use("/public", express.static(__dirname + "/public"));

app.use(function middleware(req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

































 module.exports = app;
