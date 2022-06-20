const Task = (value, key) => {
  return (
    <li  key={key}>{value}</li>
  );
}
const tasks = ['Task 1', 'Task 2', 'Task 3'];

function App() {
  return (
    <div>
      <h1>Tasks</h1>
      {tasks.map((task) => Task(task, tasks.indexOf(task)))}
    </div>
  );
}

export default App;
