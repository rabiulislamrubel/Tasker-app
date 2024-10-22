import { useState } from "react";
import TaskAllList from "./TaskAllList";
import TaskSearch from "./TaskSearch";
import TaskAddModal from "../TaskAddModal";

export default function TaskBoard() {
  const defaultTaskData = {
    id: crypto.randomUUID(),
    title: "Learn React",
    description:
      "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
    tags: ["Web", "Python", "API"],
    priority: "High",
    isFavorite: true,
  };

  const [tasks, setTasks] = useState([defaultTaskData]);
  const [showModal, setShowModal] = useState(false);
  const [updatingTask, setUpdatingTask] = useState(null);

  const handleModalClick = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
      setUpdatingTask(null);
    }
    setShowModal(false);
  };

  const handleEditTask = (updateTask) => {
    setUpdatingTask(updateTask);
    setShowModal(true);
  };

  const handleCloseClick = () => {
    setShowModal(false);
    setUpdatingTask(null);
  };

  const handleDelete = (taskId) => {
    const deleteTask = tasks.filter((task) => task.id !== taskId);
    setTasks(deleteTask);
  };

  const handleAllDelete = () => {
    tasks.length = 0;
    setTasks([...tasks]);
  };

  const handleFavorite = (taskId) => {
    setTasks(tasks.map(task =>{
      if(task.id === taskId){
        return {
          ...task,
          isFavorite: !task.isFavorite
        }
      }
      return task;
    }))
  }


  const handleSearch = (searchText) => {
    const searchItems = tasks.filter(task => task.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));

    setTasks([...searchItems]);
  }

  return (
    <>
      <section className="mb-20" id="tasks">
        <div className="container">
          <TaskSearch onSearch={handleSearch}/>
          <TaskAllList
            handleEditTask={handleEditTask}
            onAddClick={() => setShowModal(true)}
            tasks={tasks}
            onDelete={handleDelete}
            onAllDelete={handleAllDelete}
            onFav={handleFavorite}
          />
        </div>
      </section>
      {showModal && (
        <TaskAddModal
          updatingTask={updatingTask}
          addTaskModal={handleModalClick}
          onClose={handleCloseClick}
        />
      )}
    </>
  );
}
