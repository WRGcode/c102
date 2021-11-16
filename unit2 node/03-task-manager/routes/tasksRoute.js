/*
post '/' createTask => add new task
get '/' getTasks => returns tasks
del '/' deleteTask => removes a task
put '/:id'  editTask => updates all task
get '/:id getTask returns one task
del '/:id' deleteTask => removes all task
*/

// const { Router } = require("express");
const express = require("express");
const router = express.Router();

const {
createTask,
getTasks,
deleteTask,
editTask,
getTask,
clearTasks,
} = require('../controllers/taskCon')

router.route("/").get(getTasks).post(createTask).delete(clearTasks);

router.route("/:id").get(getTask).delete(deleteTask).put(editTask);

module.exports = router;
