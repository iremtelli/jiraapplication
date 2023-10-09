import { createContext } from "react"
import { useEffect, useState } from "react"
import axios from "axios"

const TasksContext = createContext()

function Provider({ children }) {
  const [tasks, setTasks] = useState([])
  const createTask = (title, taskDesc) => {
    const response = axios.post("http://localhost:5000/tasks", {
      title,
      taskDesc,
    })
    console.log(response)
    const createdTasks = [...tasks, response.data]
    setTasks(createdTasks)
  }
  const fetchTask = async () => {
    const response = await axios.get("http://localhost:5000/tasks")
    setTasks(response.data)
  }
  const deleteTaskById = async (id) => {
    await axios.delete(`http://localhost:5000/tasks/${id}`)
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id
    })
    setTasks(afterDeletingTasks)
  }

  const editTaskById = async (id, updatedTitle, updatedTaskDesc) => {
    await axios.put(`http://localhost:5000/tasks/${id}`, {
      title: updatedTitle,
      taskDesc: updatedTaskDesc,
    })

    const updatedTask = tasks.map((task) => {
      if (task.id === id) {
        return { id, title: updatedTitle, taskDesc: updatedTaskDesc }
      }
      return task
    })
    setTasks(updatedTask)
  }
  const sharedValuesAndMethos = {
    tasks,
    createTask,
    fetchTask,
    editTaskById,
    deleteTaskById,
  }
  return (
    <TasksContext.Provider value={sharedValuesAndMethos}>
      {children}
    </TasksContext.Provider>
  )
}
export { Provider }
export default TasksContext
