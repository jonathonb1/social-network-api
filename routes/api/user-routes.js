const router = require('express').Router();

const {
    getAllUsers,
    getUsersById,
    createUsers,
    updateUsers,
    deleteUsers,
} = require('../../controllers/users-controller');


// Set up GET all and POST at /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createrUsers);

// Set up GET one, PUT, and DELETE at api/users/:id
router
    .route('/:id')
    .get(getUsersById)
    .put(updateUsers)
    .delete(deleteUsers);


module.exports = router;