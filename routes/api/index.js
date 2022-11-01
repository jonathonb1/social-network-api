const router = require('express').Router();

// add prefix of `/users` to routes created in user-routes.js
const usersRoutes = require('./user-routes');

// add prefix of /thoughts to routes created in thought-routes.js
const thoughtsRoutes = require('./thought-routes');


router.use('/users', usersRoutes);
router.use('/thoughts', thoughtsRoutes);


module.exports = router;