var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const PORT = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

// app.listen(PORT, () => {
//   console.log(`Our app is running on port ${ PORT }`);
// });

http.listen(PORT, function(){
  console.log(`Our app is running on port ${ PORT }`);
});
