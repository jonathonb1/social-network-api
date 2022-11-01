const router = require('express').Router();

const {
    getAllUsers,
    getUsersById,
    createUsers,
    updateUsers,
    deleteUsers,
    addFriend,
    deleteFriend
  } = require('../../controllers/users-controller');



// Set up GET all and POST at /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUsers);

// Set up GET one, PUT, and DELETE at api/users/:id
router
    .route('/:id')
    .get(getUsersById)
    .put(updateUsers)
    .delete(deleteUsers);

    
router
    .route('/:id/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);


module.exports = router;