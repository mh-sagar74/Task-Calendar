"use client";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TaskIcon from "@mui/icons-material/Task";

export default function Form({
  tasks,
  setTasks,
  selectedDate,
  setIsSeeTasks,
  setIsAdd,
}) {
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [addMessage, setAddMessage] = useState("");

  const handleAddTaskBtn = (e) => {
    e.preventDefault();
    setTasks([
      ...tasks,
      {
        title: newTitle,
        description: newDescription,
        id: uuidv4(),
        taskDay: selectedDate,
      },
    ]);
    setNewTitle("");
    setNewDescription("");
    setAddMessage("* Your task has been added. You can add more tasks *");
  };

  return (
    <div>
      <form
        className="flex flex-col gap-3 pl-[80px] pr-[80px] justify-center"
        onSubmit={handleAddTaskBtn}>
        <TextField
          label="Add Title"
          variant="filled"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <TextField
          label="Add Description"
          variant="filled"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
        {newTitle && newDescription ? (
          <Button
            type="submit"
            variant="contained"
            endIcon={<AddCircleOutlineIcon />}>
            Add Task
          </Button>
        ) : (
          <Button
            disabled
            type="submit"
            variant="contained"
            endIcon={<AddCircleOutlineIcon />}>
            Add Task
          </Button>
        )}
      </form>
      {addMessage ? (
        <div className="font-bold text-green-600 mt-[70px]">{addMessage}</div>
      ) : (
        <div className="font-bold text-red-600 mt-[70px]">
          * Fill both input field to add your task *
        </div>
      )}
      <div className="mt-6">
        <Button
          color="secondary"
          size="large"
          endIcon={<TaskIcon color="secondary" fontSize="large" />}
          onClick={() => {
            setIsSeeTasks(true);
            setIsAdd(false);
          }}>
          View Tasks
        </Button>
      </div>
    </div>
  );
}
