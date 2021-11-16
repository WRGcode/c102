const Task = require("../models/Task");

const createTask = async (req, res) => {
  //task.create is a method that puts a template object to the DB
  const task = await Task.create(req.body);
  //the res is just what the dev sees in the response
  //create is a METHOD no a query
  res.json({ method: req.method, task: task, body: req.body });
};
const getTasks = async (req, res) => {
  //find is a QUERY
  //queryies return the thing you are looking for
  const tasks = await Task.find({});
  // this is returned to the user as a JSON to be used with the data
  res.json({ method: req.method, tasks: tasks });
};
const clearTasks = async (req, res) => {
  const tasks = await Task.deleteMany({})
  res.json({ method: req.method, task: tasks });
};
const editTask = async (req, res) => {
  const {id} = req.params
  try{
  const task = await Task.findByIdAndUpdate(id, req.body, {
  //new is true => task will = the NEW task
  new: true,
  //run Validators checks the new task against the model we created
  runValidators:true
  })
  if (!task){
    return  res.json({msg: `no task with id : ${id}`})
  }

  res.json({
    method: req.method,
    task: task,
    id: req.params.id,
    body: req.body,
  });
  }catch(err){
    return  res.json({msg: `no task with id : ${id}`})
  }
};
const getTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findById(id);

    if (!task) {
      return res.json({ msg: `no item with id : ${id}` });
    }

    res.json({ method: req.method, task: task, id: req.params.id });
  } catch (err) {
    res.json({ msg: `no items with id : ${id}` });
  }
};
const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.deleteOne({ _id: id });
    if (!task) {
      return res.json({ msg: `no item with id : ${id}` });
    }
    res.json({ method: req.method, task: task, id: req.params.id });
  } catch (err) {
    res.json({ msg: `err` });
  }
};

module.exports = {
  createTask,
  getTasks,
  deleteTask,
  editTask,
  getTask,
  clearTasks,
};
