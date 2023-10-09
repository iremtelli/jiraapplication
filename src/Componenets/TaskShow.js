import { useState } from "react"
import TaskCreate from "./TaskCreate"
import TasksContext from "./context/task.js"
import { useContext } from "react"

function TaskShow({ task }) {
  const { editTaskById, deleteTaskById } = useContext(TasksContext)

  const [showEdit, setshowEdit] = useState(false)
  const handleDeleteClick = () => {
    // onDelete(task.id)
    deleteTaskById(task.id)
  }
  const handleEditClick = () => {
    setshowEdit(!showEdit)
  }
  const handleSubmit = (id, updatedTitle, updatedTaskDesc) => {
    setshowEdit(false)
    // onUpdate(id, updatedTitle, updatedTaskDesc)
    editTaskById(id, updatedTitle, updatedTaskDesc)
  }

  return (
    <div className="task-show">
      {showEdit ? (
        <TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit} />
      ) : (
        <div>
          <h3 className="task-title">Göreviniz</h3>
          <p>{task.title}</p>
          <h3 className="task-title">Yapılacaklar</h3>
          <p>{task.taskDesc}</p>
          <div>
            <button className="task-edit" onClick={handleEditClick}>
              Güncelle
            </button>
            <button className="task-delete" onClick={handleDeleteClick}>
              Sil
            </button>
          </div>
        </div>
      )}{" "}
    </div>
  )
}

export default TaskShow
