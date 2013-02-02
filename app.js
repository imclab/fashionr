var express = require('express'),
    app = express(),
    st = require('node-static'),
    server = require('http').createServer(app)
    io = require('socket.io').listen(server)

app.listen(22727);

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
