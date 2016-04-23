var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);
var io = require('socket.io')(server);

app.use(express.static('client'));
app.use('/', express.static('client'));

// Set up Routes for the application
require('./routes/index.js')(app);

app.set('port', (process.env.PORT || 3000));


server.listen(app.get('port'), function () {
    console.log("Server started listening on port " + app.get('port'));
});

io.on('connection', function (socket) {

    socket.emit('news', {hello: 'world'});

    socket.on('my other event', function (data) {
        console.log(data);
    });

    socket.emit('alert',
        [{
            name: "head ache"
        }, {
            name: "sneezing"
        }]
    );
});
