const User = require('../models').User;

module.exports = {
    new: (req, res) => {
        res.render('sessions/new');
    },
    create: (req, res) => {
        User.login(req.body.email, req.body.password)
            .then(user => {
                if(user) {
                    req.session.userid = user.id;
                }
                // res.redirect('/tasks');
                res.json(user);
            }).catch(err => {
                res.json(err);
            });
    }
}