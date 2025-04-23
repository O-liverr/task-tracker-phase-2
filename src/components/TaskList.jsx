import Task from './Task.jsx';

function TaskList({ tasks, deleteTask, editTask }) {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks yet!</p>
      ) : (
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;