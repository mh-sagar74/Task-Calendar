"use client";

import { useEffect, useState } from "react";
import Month from "./Month";
import Days from "./Days";
import AddTaskIcon from "@mui/icons-material/AddTask";
import Button from "@mui/material/Button";
import TaskIcon from "@mui/icons-material/Task";
import Form from "../tasks/Form";
import TaskList from "../tasks/TaskList";
import IconButton from "@mui/material/IconButton";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";

export default function Calendar() {
  const [cDate, setCDate] = useState(new Date());
  const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const [daysInMonth, setDaysInMonth] = useState([]);
  const [startDate, setStartDate] = useState(0);
  const [selectedDate, setSelectedDate] = useState({
    sDay: "",
    clicked: false,
  });
  const [isAdd, setIsAdd] = useState(false);
  const [isSeeTasks, setIsSeeTasks] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const year = cDate.getFullYear();
    const month = cDate.getMonth();
    const day = new Date(year, month, 1);
    const days = [];

    while (cDate.getMonth() === day.getMonth()) {
      days.push(new Date(day));
      day.setDate(day.getDate() + 1);
    }

    setDaysInMonth(days);
    setStartDate(new Date(year, month, 1).getDay());
  }, [cDate]);

  const handleRightBtn = () => {
    setCDate(new Date(cDate.setMonth(cDate.getMonth() + 1)));
  };

  const handleLeftBtn = () => {
    setCDate(new Date(cDate.setMonth(cDate.getMonth() - 1)));
  };

  const handleDatePick = (i) => {
    const selected = daysInMonth.find((day, ind) => ind === i);
    setSelectedDate({
      ...selectedDate,
      sDay: selected,
      clicked: !selectedDate.clicked,
    });
  };

  return (
    <div className="m-auto w-[500px] text-center justify-items-center">
      <Month
        handleRightBtn={handleRightBtn}
        handleLeftBtn={handleLeftBtn}
        cDate={cDate}
      />
      <Days
        handleDatePick={handleDatePick}
        week={week}
        startDate={startDate}
        daysInMonth={daysInMonth}
        selectedDate={selectedDate}
        tasks={tasks}
      />

      {/* Select date and add task button */}
      <div className="mt-5 flex gap-6">
        {selectedDate.clicked ? (
          <Button color="error" size="large" onClick={() => setIsAdd(true)}>
            {<AddTaskIcon color="secondary" fontSize="large" />}
          </Button>
        ) : (
          <Button color="error" size="large" disabled>
            {<AddTaskIcon fontSize="large" />}
          </Button>
        )}
        <Button color="error" size="large" onClick={() => setIsSeeTasks(true)}>
          {<TaskIcon color="secondary" fontSize="large" />}
        </Button>
      </div>
      <div className="relative">
        {isAdd && (
          <div className="fixed inset-0 z-50 backdrop-brightness-50 flex justify-center items-center">
            <div className="bg-gradient-to-b from-red-100 via-white to-red-100 rounded-lg h-[500px] w-[800px] overflow-auto pt-[30px]">
              <IconButton
                onClick={() => setIsAdd(false)}
                sx={{ position: "relative", left: "370px", top: "-20px" }}>
                <CloseFullscreenIcon />
              </IconButton>
              <Form
                tasks={tasks}
                setTasks={setTasks}
                selectedDate={selectedDate}
                setIsSeeTasks={setIsSeeTasks}
                setIsAdd={setIsAdd}
              />
            </div>
          </div>
        )}
      </div>
      {/* <TaskList tasks={tasks} /> */}
      <div className="relative">
        {isSeeTasks && (
          <div className="fixed inset-0 z-50 backdrop-brightness-50 flex justify-center items-center">
            <div className="bg-gradient-to-b from-red-100 via-white to-red-100 rounded-lg h-[700px] w-[800px] overflow-auto">
              <IconButton
                onClick={() => setIsSeeTasks(false)}
                sx={{ position: "relative", left: "370px", top: "8px" }}>
                <CloseFullscreenIcon />
              </IconButton>
              <TaskList
                tasks={tasks}
                setIsSeeTasks={setIsSeeTasks}
                setIsAdd={setIsAdd}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
