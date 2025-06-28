"use client";

import { Box, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import FullTask from "./FullTask";
import CancelIcon from "@mui/icons-material/Cancel";

export default function TaskBox({ tasks, value }) {
  const [viewFullTaskClicked, setViewFullTaskClicked] = useState(false);
  const [viewFullTask, setViewFullTask] = useState({});

  const handleFullViewTask = (task) => {
    setViewFullTask(task);
    setViewFullTaskClicked(true);
  };

  const handleCrossBtn = () => {
    setViewFullTaskClicked(false);
  };

  return (
    <Box>
      {tasks.map(
        (task) =>
          task.chosenDate.getFullYear() === value.getFullYear() &&
          task.chosenDate.getMonth() === value.getMonth() &&
          task.chosenDate.getDate() === value.getDate() && (
            <Typography
              onClick={() => handleFullViewTask(task)}
              key={task.id}
              sx={{
                width: "150px",
                backgroundColor: "blue",
                color: "white",
                borderRadius: "3px",
                marginBottom: "15px",
              }}
              gutterBottom>
              <span>{task.heading.slice(0, 18)}</span>
              {task.heading.length > 10 && <span>...</span>}
            </Typography>
          )
      )}
      <Box sx={{ position: "relative" }}>
        {viewFullTaskClicked && (
          <Box
            sx={{
              position: "fixed",
              inset: 0,
              zIndex: 7,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(255,255,255, 0.5)",
              backdropFilter: "brightness(50%)",
            }}>
            <Box
              sx={{
                backgroundColor: "white",
                height: "480px",
                width: "900px",
                alignContent: "center",
                borderRadius: "10px",
                position: "relative",
                overflow: "auto",
              }}>
              <IconButton
                sx={{ position: "absolute", right: "15px", top: "15px" }}
                size="large"
                onClick={handleCrossBtn}>
                <CancelIcon color="error" fontSize="inherit" />
              </IconButton>
              <FullTask viewFullTask={viewFullTask} />
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}
