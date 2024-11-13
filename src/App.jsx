import "./App.css";
import Tasks from "./Tasks";

function App() {
  const Tasksnames = [
    "Learn PHP",
    "Learn Javascript",
    "Learn React",
    "Learn Redux",
    "Prepare for Interview",
  ];

  return (
    <div>
      <Tasks mytasks={Tasksnames} />
    </div>
  );
}

export default App;
