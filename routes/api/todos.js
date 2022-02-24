const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Todo = require("../../models/Todo");

// @route   POST api/todos
// @desc    post a new todo
router.post(
  "/",
  [check("title", "Title is required").isLength({ min: 5 })],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let todo = new Todo({
        title: req.body.title,
        status: false,
      });

      const todoSaved = await todo.save();
      res.json(todoSaved);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

// @route   GET api/todos
// @desc    Get all todos
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find().sort({ date: -1 });
    res.json(todos);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// @route   GET api/todos
// @desc    Get todo by Id
router.get("/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    res.json(todo);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// @route   PUT api/todos/:id
// @desc    Change status of todo
router.put("/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    todo.status = !todo.status;
    await todo.save();
    res.json(todo);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

module.exports = router;
