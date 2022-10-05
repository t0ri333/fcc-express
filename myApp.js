let express = require('express');
let app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

let path = __dirname + '/public';
app.use(express.static(__dirname + "/public"));




































 module.exports = app;
