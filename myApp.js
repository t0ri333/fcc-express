let express = require('express');
let app = express();

app.use(function middleware(req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

app.get("/:word/echo",(req, res)=> {
  const { word } = req.params;
  res.json({
    echo: word
  });
});

app.get("/name", (req, res) => {
  const { first, last} = req.query;
  res.json({name: first + " " + last})
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/json', (req,res) => {
  let msg = process.env.MESSAGE_STYLE === "uppercase"?"HELLO JSON" : "Hello json";
  res.json({"message": msg});
});

app.use("/public", express.static(__dirname + "/public"));

app.get('/now', function(req, res, next){
  req.time = new Date().toString();
  next();
}, function (req, res) {
  res.json({time: req.time});
} )

































 module.exports = app;
