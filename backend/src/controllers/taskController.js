import { v4 as uuidv4 } from 'uuid';

let tasks = [
  {
    id: uuidv4(),
    title: 'Learn React',
    completed: false,
    createdAt: new Date().toISOString()
  },
  {
    id: uuidv4(),
    title: 'Build a Task Manager',
    completed: true,
    createdAt: new Date().toISOString()
  }
];

export const getTasks = (req, res) => {
  try {
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tasks', error: error.message });
  }
};

export const createTask = (req, res) => {
  try {
    const { title } = req.body;

    if (!title || title.trim() === '') {
      return res.status(400).json({ message: 'Title is required' });
    }

    const newTask = {
      id: uuidv4(),
      title: title.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: 'Error creating task', error: error.message });
  }
};

export const updateTask = (req, res) => {
  try {
    const { id } = req.params;
    const taskIndex = tasks.findIndex(task => task.id === id);

    if (taskIndex === -1) {
      return res.status(404).json({ message: 'Task not found' });
    }

    // Toggle completed status
    tasks[taskIndex].completed = !tasks[taskIndex].completed;

    res.status(200).json(tasks[taskIndex]);
  } catch (error) {
    res.status(500).json({ message: 'Error updating task', error: error.message });
  }
};

export const deleteTask = (req, res) => {
  try {
    const { id } = req.params;
    const initialLength = tasks.length;
    tasks = tasks.filter(task => task.id !== id);

    if (tasks.length === initialLength) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.status(200).json({ message: 'Task deleted successfully', id });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting task', error: error.message });
  }
};
