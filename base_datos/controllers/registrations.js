const User = require('../models').User;

module.exports = {
    new: (req, res) => {
        res.render('registrations/new');
    },
    create: (req, res) => {
        let data = {
            email: req.body.email,
            password: req.body.password
        };
        User.create(data).then(user => {
            // res.redirect('/tasks');
            res.json(user);
        }).catch(err => {
            res.json(err);
        });
    }
};