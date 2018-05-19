const AuthenticationController = require('./controllers/authentication');
const UserController = require('./controllers/user');
const ChatController = require('./controllers/chat');

const express = require('express');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });

module.exports = function (app) {
    const apiRoutes = express.Router();
    const authRoutes = express.Router();
    const userRoutes = express.Router();
    const chatRoutes = express.Router();

    apiRoutes.use('/auth', authRoutes);

    authRoutes.post('/register', AuthenticationController.register);
    authRoutes.post('/login', requireLogin, AuthenticationController.login);

    apiRoutes.use('/user', userRoutes);
    //userRoutes.get('/:userId', requireAuth, UserController.viewProfile);

    apiRoutes.use('/chat', chatRoutes);
    chatRoutes.get('/', requireAuth, ChatController.getConversations);
    chatRoutes.post('/:conversationId', requireAuth, ChatController.sendReply);
    chatRoutes.post('/new/:recipient', requireAuth, ChatController.newConversation);

    app.use('/api', apiRoutes);
};