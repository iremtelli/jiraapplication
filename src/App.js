import "./App.css"
import TaskCreate from "./Componenets/TaskCreate"
import TaskList from "./Componenets/TaskList"
import { useEffect, useContext } from "react"
import taskList from "./api/db.json"
import TasksContext from "./Componenets/context/task"

function App() {
  const { fetchTask } = useContext(TasksContext)

  useEffect(() => {
    fetchTask()
  }, [])

  return (
    <div className="App">
      <TaskCreate />
      <h1>Görevler</h1>
      <TaskList />
    </div>
  )
}

export default App
