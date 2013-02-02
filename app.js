var express = require('express'),
    app = express(),
    st = require('node-static'),
    server = require('http').createServer(app)
    io = require('socket.io').listen(server),
    request = require('request');

server.listen(5000);

app.use(express.static(__dirname + "/public"));

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/public/index.html');
});

app.get('/dashboard', function (req, res) {
  res.sendfile(__dirname + '/public/dashboard.html');
});

app.get('/phone', function (req, res) {
  res.sendfile(__dirname + '/public/phone.html');
});

io.sockets.on('connection', function (socket) {  
  socket.on('click', function(data){
      request('https://push.geckoboard.com/v1/send/26572-70a73279121e58830beb6889bc397b63', function (error, response, body) {
        if (!error && response.statusCode == 200) {
          console.log(body) // Print the google web page.
        }
      })

      console.log(data)
      socket.broadcast.emit('triggerPinterest', data);
  })
});
