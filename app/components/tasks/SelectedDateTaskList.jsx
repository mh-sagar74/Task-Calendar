"use client";

import IconButton from "@mui/material/IconButton";
import TaskList from "../tasks/TaskList";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";

export default function SelectedDateTaskList({
  setIsSeeTasks,
  tasks,
  setIsAdd,
  selectedDate,
  setHasTaskInSelectedDay,
}) {
  return (
    <div className="relative">
      <div className="fixed inset-0 z-50 backdrop-brightness-50 flex justify-center items-center">
        <div className="bg-gradient-to-b from-red-100 via-white to-red-100 rounded-lg h-[700px] w-[800px] overflow-auto">
          <IconButton
            onClick={() => setHasTaskInSelectedDay(false)}
            sx={{ position: "relative", left: "370px", top: "8px" }}>
            <CloseFullscreenIcon />
          </IconButton>
          <TaskList
            tasks={tasks}
            setIsSeeTasks={setIsSeeTasks}
            setIsAdd={setIsAdd}
            selectedDate={selectedDate}
            setHasTaskInSelectedDay={setHasTaskInSelectedDay}
          />
        </div>
      </div>
    </div>
  );
}
