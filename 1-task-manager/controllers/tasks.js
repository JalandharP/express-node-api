
const Task = require("../models/Task");

const getAllTasks = async (req, res) => {

    try {
        const tasks = await Task.find({});
        res.status(200).json({ tasks });
    } catch (error) {
        res.status(500).json({ msg: error });
    }

}

const addTask = async (req, res) => {
    console.log("req.body::", req.body);
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error });
    }

}

const getTask = async(req, res) => {
    const {id} = req.params;
    console.log("req.params::", req.params);

    try {
       // const task = await Task.findById(id).exec();
        const task = await Task.findOne({_id: id}).exec();
         // Check if task is found
         if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.status(200).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
   
}

const updateTask = async(req, res) => {

    const {id} = req.params;
    const {name} = req.body;
    console.log("req.params::", req.params);

    try {
       // const task = await Task.findById(id).exec();
        const task = await Task.updateOne({_id: id}, {name: name}).exec();
         // Check if task is found
         if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.status(200).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
  
}

const deleteTask = async(req, res) => {
    const {id} = req.params;
    const {name} = req.body;
    console.log("req.params::", req.params);

    try {
       // const task = await Task.findById(id).exec();
        const task = await Task.deleteOne({_id: id}).exec();
         // Check if task is found
         if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.status(200).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}


module.exports = {
    getAllTasks,
    getTask,
    addTask,
    updateTask,
    deleteTask
}