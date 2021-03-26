import { FaTimes } from 'react-icons/fa';
const Task = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`task ${task.reminder ? 'reminder' : ''}`}
          onDoubleClick={() => onToggle(task.id)}
        >
          <h3>
            {task.text}{' '}
            <FaTimes
              style={{ color: 'red', cursor: 'pointer' }}
              onClick={() => onDelete(task.id)}
            />
          </h3>
          <p>{task.day}</p>
        </div>
      ))}
    </>
  );
};

export default Task;
