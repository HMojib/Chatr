const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const config = require('./config/database');
const socketStuff = require('./webSocket');
const router = require('./routes')
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect(config.database);
app.use(cors());
let server = app.listen(3000);
console.log('Server is running on port 3000');

const io = require('socket.io').listen(server);
socketStuff(io);

io.on('connection', function(socket){
   console.log(socket.id);
});

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});
router(app);