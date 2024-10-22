import NoTaskFound from "./NoTaskFound";
import TaskAddAllDel from "./TaskAddAllDel";
import TaskFavorite from "./TaskFavorite";
import TaskTags from "./TaskTags";

export default function TaskAllList({
  onAddClick,
  tasks,
  handleEditTask,
  onDelete,
  onAllDelete,
  onFav,
}) {
  return (
    <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
      <TaskAddAllDel onAddClick={onAddClick} onAllDelete={onAllDelete} />

      {tasks.length > 0 ? (
        <div className="overflow-auto">
          <table className="table-fixed overflow-auto xl:w-full">
            <thead>
              <tr>
                <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
                <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
                  {" "}
                  Title{" "}
                </th>
                <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
                  {" "}
                  Description{" "}
                </th>
                <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
                  {" "}
                  Tags{" "}
                </th>
                <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                  {" "}
                  Priority{" "}
                </th>
                <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                  {" "}
                  Options{" "}
                </th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr
                  key={task.id}
                  className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2"
                >
                  <td>
                    <TaskFavorite
                      isFavorite={task.isFavorite}
                      taskId={task.id}
                      onFav={onFav}
                    />
                  </td>
                  <td>{task.title}</td>
                  <td>
                    <div>{task.description}</div>
                  </td>
                  <td>
                    <TaskTags tags={task.tags} />
                  </td>
                  <td className="text-center">{task.priority}</td>
                  <td>
                    <div className="flex items-center justify-center space-x-3">
                      <button
                        onClick={() => onDelete(task.id)}
                        className="text-red-500"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => handleEditTask(task)}
                        className="text-blue-500"
                      >
                        Edit
                      </button>
                    </div>

                    {/* <TaskEditDel task={task} handleEditTask={handleEditTask} /> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <NoTaskFound />
      )}
    </div>
  );
}
