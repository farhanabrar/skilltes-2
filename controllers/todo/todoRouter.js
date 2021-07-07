const express = require("express");
const router = express.Router();
const { 
    getTodo, 
    createTodo, 
    updateTodo, 
    deleteTodo
} = require("./todoController");

router
    .get("/", getTodo)
    .post("/", createTodo)
    .put("/", updateTodo)
    .delete("/", deleteTodo);

module.exports = router;