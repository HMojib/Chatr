const User = require('../models/user');

exports.viewProfile = function (req, res, next) {
    const userId = req.params.userId;

    if (req.user._id.toString() !== userId) { return res.status(401).json({ error: 'You are not authorized to view this user profile.' }); }
    User.findById(userId, (err, user) => {
        if (err) {
            res.status(400).json({ error: 'No user found for this ID.' });
            return next(err);
        }
        const userToReturn = {
            _id: user._id,
            firstName: user.profile.first_name,
            lastName: user.profile.last_name,
            email: user.email
        };

        return res.status(200).json({ user: userToReturn });
    });
};