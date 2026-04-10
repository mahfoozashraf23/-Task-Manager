import { useState, useEffect } from 'react';
import api from './api/axios';
import './index.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all tasks
  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await api.get('/tasks');
      setTasks(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch tasks. Please check if the backend is running.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Create new task
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      const response = await api.post('/tasks', { title });
      setTasks([response.data, ...tasks]);
      setTitle('');
    } catch (err) {
      alert('Error creating task');
      console.error(err);
    }
  };

  // Toggle task completion
  const handleToggle = async (id) => {
    try {
      const response = await api.patch(`/tasks/${id}`);
      setTasks(tasks.map(task => 
        task.id === id ? response.data : task
      ));
    } catch (err) {
      alert('Error updating task');
      console.error(err);
    }
  };

  // Delete task
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this task?')) return;
    
    try {
      await api.delete(`/tasks/${id}`);
      setTasks(tasks.filter(task => task.id !== id));
    } catch (err) {
      alert('Error deleting task');
      console.error(err);
    }
  };

  return (
    <main className="glass-card">
      <h1>Task Manager</h1>
      
      <form className="task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What needs to be done?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
        <button type="submit" className="btn-add">Add Task</button>
      </form>

      {loading && (
        <div className="loading-state">
          <div className="loader"></div>
          <p>Loading your tasks...</p>
        </div>
      )}

      {error && (
        <div className="error-state">
          <p>{error}</p>
          <button onClick={fetchTasks} className="btn-add" style={{marginTop: '1rem', padding: '0.5rem 1rem'}}>
            Retry
          </button>
        </div>
      )}

      {!loading && !error && (
        <ul className="task-list">
          {tasks.length === 0 ? (
            <p style={{textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.95rem'}}>Your task list is clear. Begin your productivity session by adding a task.</p>
          ) : (
            tasks.map((task) => (
              <li key={task.id} className="task-item">
                <input
                  type="checkbox"
                  className="task-checkbox"
                  checked={task.completed}
                  onChange={() => handleToggle(task.id)}
                />
                <span className={`task-title ${task.completed ? 'completed' : ''}`}>
                  {task.title}
                </span>
                <button 
                  className="btn-delete" 
                  onClick={() => handleDelete(task.id)}
                  title="Delete Task"
                >
                  ✕
                </button>
              </li>
            ))
          )}
        </ul>
      )}
    </main>
  );
}

export default App;
