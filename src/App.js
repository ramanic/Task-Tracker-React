import Header from './components/Header';
import Task from './components/Task';
import React, { useState } from 'react';
import AddTask from './components/AddTask';
function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const addTask = async (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id == id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  const toggleAddTask = () => {
    setShowAddTask(!showAddTask);
  };
  return (
    <div className="container">
      <Header onClick={toggleAddTask}></Header>
      {showAddTask ? <AddTask onAdd={addTask}></AddTask> : ''}
      {tasks.length > 0 ? (
        <Task
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
        ></Task>
      ) : (
        'No Task to show.'
      )}
    </div>
  );
}

export default App;
