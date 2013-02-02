var express = require('express'),
    app = express.createServer(),
    st = require('node-static'),
    jquery = require('jquery'),
    io = require('socket.io').listen(app)

app.listen(8080);

app.use(express.static(__dirname + "/public"));

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/public/index.html');
});

app.get('/phone', function (req, res) {
  res.sendfile(__dirname + '/public/phone.html');
});

io.sockets.on('connection', function (socket) {  
  socket.on('click', function(data){

  })
});