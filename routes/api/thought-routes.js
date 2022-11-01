
const router = require('express').Router();


const { 
    getAllThoughts, 
    getThoughtsById, 
    createThoughts, 
    updateThoughts,
    deleteThoughts,
    addReaction,
    deleteReaction

} = require('../../controllers/thoughts-controller');


router
.route('/').get(getAllThoughts);

// Set up GET all and POST at /api/thoughts
router
    .route('/:id')
    .get(getThoughtsById)
    .put(updateThoughts)
    .delete(deleteThoughts); 

    // Set up GET one, PUT, and DELETE at api/thoughts/:id
router
    .route('/:userId')
    .post(createThoughts);


router
    .route('/:thoughtId/reactions')
    .post(addReaction);


router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);


module.exports = router;