const router = require('express').Router();

//  /api/thoughts
const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

//get all and post
router
    .route('/')
    .get(getAllThought)
    .post(createThought);

//get by id, update /api/thoughts/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// api/thoughts/:thoughtId/reactions
router
    .route('/:thoughtId/:reactionsId')
    .post(createReaction);

// api/thoughts/:thoughtId/reactions/:reactionId
router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);

module.exports = router;