"use client";

import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import FullTask from "./FullTask";

export default function TaskBox({ tasks, value }) {
  const [viewFullTaskClicked, setViewFullTaskClicked] = useState(false);
  const [viewFullTask, setViewFullTask] = useState({});
  const [tasksInOneDay, setTasksInOneDay] = useState([]);
  const [seeMore, setSeeMore] = useState(false);
  const [openFullTask, setOpenFullTask] = useState(false);

  useEffect(() => {
    const dayTask = tasks.filter(
      (task) =>
        task.chosenDate.getFullYear() === value.getFullYear() &&
        task.chosenDate.getMonth() === value.getMonth() &&
        task.chosenDate.getDate() === value.getDate()
    );
    setTasksInOneDay(dayTask);
  }, [tasks]);

  const handleFullViewTask = (task) => {
    setViewFullTask(task);
    setViewFullTaskClicked(true);
    setOpenFullTask(true);
    setSeeMore(false);
  };

  const handleSeeMore = () => {
    setSeeMore(true);
  };

  const handleCloseSeeMore = () => {
    setSeeMore(false);
  };

  return (
    <Box>
      <Box>
        {tasksInOneDay.slice(0, 2).map((task) => (
          <Typography
            onClick={() => handleFullViewTask(task)}
            key={task.id}
            sx={{
              width: "110px",
              backgroundColor: "#219ebc",
              color: "white",
              borderRadius: "3px",
              marginBottom: "5px",
              textAlign: "left",
              paddingLeft: "5px",
              paddingRight: "5px",
              fontSize: "12px",
              ":hover": {
                cursor: "pointer",
                backgroundColor: "rgba(55, 182, 214)",
                transition: "0.2s",
              },
            }}
            gutterBottom>
            <span>{task.heading.slice(0, 12)}</span>
            {task.heading.length > 10 && <span>..</span>}
          </Typography>
        ))}
        {tasksInOneDay.length > 2 &&
          tasksInOneDay.slice(0, 1).map((task) => (
            <Typography
              onClick={handleSeeMore}
              key={task.id}
              sx={{
                width: "110px",
                color: "white",
                borderRadius: "3px",
                marginBottom: "5px",
                textAlign: "left",
                paddingLeft: "5px",
                paddingRight: "5px",
                fontSize: "12px",
                ":hover": {
                  cursor: "pointer",
                  backgroundColor: "rgba(55, 182, 214, 0.5)",
                  transition: "0.2s",
                },
              }}
              gutterBottom>
              <span>{tasksInOneDay.length - 2} more</span>
            </Typography>
          ))}
        <Dialog open={seeMore} onClose={handleCloseSeeMore}>
          <DialogTitle>
            <Typography sx={{ fontSize: "24px" }}>
              Tasks in{" "}
              {value.toLocaleDateString("default", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </Typography>
          </DialogTitle>
          <DialogContent>
            {tasksInOneDay.map((task) => (
              <Typography
                onClick={() => handleFullViewTask(task)}
                key={task.id}
                sx={{
                  width: "356px",
                  backgroundColor: "#219ebc",
                  color: "white",
                  borderRadius: "3px",
                  marginBottom: "5px",
                  textAlign: "left",
                  paddingLeft: "5px",
                  paddingRight: "5px",
                  fontSize: "12px",
                  ":hover": {
                    cursor: "pointer",
                    backgroundColor: "rgba(55, 182, 214)",
                    transition: "0.2s",
                  },
                }}>
                <span>{task.heading.slice(0, 50)}</span>
                {task.heading.length > 50 && <span>..</span>}
              </Typography>
            ))}
          </DialogContent>
        </Dialog>
      </Box>
      {viewFullTaskClicked && (
        <FullTask
          viewFullTask={viewFullTask}
          openFullTask={openFullTask}
          setOpenFullTask={setOpenFullTask}
        />
      )}
    </Box>
  );
}
