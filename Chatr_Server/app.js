const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const config = require('./config/database');
const socketStuff = require('./webSocket');
const router = require('./routes')
const mongoose = require('mongoose');

mongoose.connect(config.database);

let server = app.listen(3000);
console.log('Server is running on port 3000');

const io = require('socket.io').listen(server);
socketStuff(io);

io.on('connection', function(socket){
   console.log(socket.id);
});

app.use(bodyParser.json());
router(app);