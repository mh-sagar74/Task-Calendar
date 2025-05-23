"use client";

import Button from "@mui/material/Button";
import AddTaskIcon from "@mui/icons-material/AddTask";

export default function TaskList({
  tasks,
  setIsSeeTasks,
  setIsAdd,
  selectedDate,
}) {
  return (
    <div className="m-6 wrap-anywhere">
      <div className="text-xl font-bold">Task List</div>
      {tasks.map((task) => (
        <div
          key={task.id}
          className="text-left m-3 p-4 border border-gray-300 rounded-sm">
          <div
            className={`${
              task.taskDay.sDay <
              new Date(
                new Date().getFullYear(),
                new Date().getMonth(),
                new Date().getDate()
              )
                ? "font-semibold text-red-500 text-center line-through"
                : "font-semibold text-green-500 text-center"
            }`}>
            Your task on : {task.taskDay.sDay.getDate()}-
            {task.taskDay.sDay.toLocaleString("default", {
              month: "long",
            })}
            -{task.taskDay.sDay.getFullYear()} {"("}
            {task.taskDay.sDay.toLocaleString("default", { weekday: "long" })}
            {")"}
          </div>
          <div>
            <span className="font-semibold">Task Title : </span>
            {task.title}
          </div>
          <div>
            <span className="font-semibold">Task Description : </span>
            {task.description}
          </div>
        </div>
      ))}
      {selectedDate.clicked ? (
        <div className="mt-6">
          <Button
            color="secondary"
            size="large"
            endIcon={<AddTaskIcon color="secondary" fontSize="large" />}
            onClick={() => {
              setIsSeeTasks(false);
              setIsAdd(true);
            }}>
            Add Tasks
          </Button>
        </div>
      ) : (
        <div className="mt-6">
          <Button
            disabled
            color="secondary"
            size="large"
            endIcon={<AddTaskIcon color="secondary" fontSize="large" />}
            onClick={() => {
              setIsSeeTasks(false);
              setIsAdd(true);
            }}>
            Add Tasks
          </Button>
        </div>
      )}
    </div>
  );
}
