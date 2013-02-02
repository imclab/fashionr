var express = require('express'),
    app = express(),
    st = require('node-static'),
    server = require('http').createServer(app)
    io = require('socket.io').listen(server)

server.listen(5000);

app.use(express.static(__dirname + "/public"));

app.use("/phone",express.static(__dirname + "/phone"));

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/public/index.html');
});
/*
app.get('/phone', function (req, res) {
  res.sendfile(__dirname + '/public/phone.html');
});
*/
io.sockets.on('connection', function (socket) {  
  socket.on('click', function(data){

  })
});
