const express = require('express');
const Todos = require('../models/Todos');

const router = express.Router();

// get all todos
router.get('/', async (request, response) => {
    try {
        const todos = await Todos.find();
        response.json(todos);
    } catch (error) {
        response.json({
            message: error
        });
    }
});

// add todo
router.post('/', async (request, response) => {
    const todo = new Todos({
        title: request.body.title
    });

    try {
        const savedTodo = await todo.save();
        response.json(savedTodo);
    } catch (error) {
        response.json({
            message: error
        });
    }
});

router.delete('/:id', async (request, response) => {
    try {
        const deletedTodo = await Todos.deleteOne({ _id: request.params.id });
        response.json(deletedTodo);
    } catch (error) {
        response.json({
            message: error
        });
    }
});
module.exports = router;



