import { useState } from "react"
import TasksContext from "./context/task.js"
import { useContext } from "react"

function TaskCreate({ task, taskFormUpdate, onUpdate }) {
  const { editTaskById, createTask } = useContext(TasksContext)

  const [title, setTitle] = useState(task ? task.title : "")
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "")
  const handleChange = (event) => {
    setTitle(event.target.value)
  }
  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value)
  }
  const handleSubmit = (event, title) => {
    event.preventDefault()
    if (taskFormUpdate) {
      // editTaskById(task.id, title, taskDesc)
      onUpdate(task.id, title, taskDesc)
    } else {
      createTask(title, taskDesc)
    }
    // onCreate(title, taskDesc)
    setTitle("")
    setTaskDesc("")
  }
  return (
    <div>
      {""}
      {taskFormUpdate ? (
        <div className="task-update">
          <h3>Lütfen Taskı Düzenleyiniz!</h3>
          <form className="task-form">
            <label className="task-label">Başlığı Düzenleyiniz</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Taskı Düzenleyiniz</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="task-area"
              rows={5}
            />
            <button className="update-button" onClick={handleSubmit}>
              Düzenleyiniz!
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Lütfen Task Ekleyiniz!</h3>
          <form className="task-form">
            <label className="task-label">Başlık</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Task Giriniz</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="task-area"
              rows={5}
            />
            <button onClick={handleSubmit}>Oluştur</button>
          </form>
        </div>
      )}
    </div>
  )
}

export default TaskCreate
