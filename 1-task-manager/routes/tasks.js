const express = require("express");

const { getAllTasks,
    getTask,
    addTask,
    updateTask,
    deleteTask} = require("../controllers/tasks");

const router = express.Router();

router.route("/").get(getAllTasks).post(addTask);
router.route("/:id").patch(updateTask).delete(deleteTask).get(getTask);

module.exports = router;