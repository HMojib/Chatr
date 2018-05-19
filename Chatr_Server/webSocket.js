exports = module.exports = function (io) {
    // Set socket.io listeners.
    io.on('connection', (socket) => {
        socket.on('enter conversation', (convo) => {
            socket.join(convo);
        });
        socket.on('new message', (convo) => {
            io.sockets.in(convo).emit('refresh messages', convo);
        });
    });
};