"use client";

import { Box, Button, Typography } from "@mui/material";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Form from "./Form";
import CancelIcon from "@mui/icons-material/Cancel";
import { v4 as uuidv4 } from "uuid";
import TaskBox from "./TaskBox";

export default function DateBox({ value, daysInMonth, tasks, setTasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [addTask, setAddTask] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const handleOpenFormBtn = (value) => {
    const clickedAddBtn = daysInMonth.find((day) => day === value);
    setAddTask(true);
    setSelectedDate(clickedAddBtn);
  };

  const handleAddTaskBtn = () => {
    if (title) {
      setTasks((pre) => [
        ...pre,
        {
          heading: title,
          details: description,
          chosenDate: selectedDate,
          id: uuidv4(),
        },
      ]);
    }
    setAddTask(false);
    setTitle("");
    setDescription("");
  };

  const handleCrossBtn = () => {
    setAddTask(false);
    setTitle("");
    setDescription("");
  };

  return (
    <Box
      sx={{
        width: "120px",
        height: "120px",
        textAlign: "center",
        backgroundColor: "rgba(0, 29, 61,0.6)",
        border: "1px solid white",
        borderRadius: "6px",
        marginLeft: "15px",
        marginRight: "15px",
        justifyItems: "center",
        position: "relative",
        marginBottom: "30px",
      }}>
      <IconButton
        sx={{ color: "white", position: "absolute", left: 0 }}
        onClick={() => handleOpenFormBtn(value)}>
        <AddBoxRoundedIcon fontSize="inherit" />
      </IconButton>
      <Box sx={{ position: "relative" }}>
        {addTask && (
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
                backgroundColor: "rgba(253, 240, 213)",
                height: "480px",
                width: "900px",
                alignContent: "center",
                borderRadius: "10px",
                position: "relative",
              }}>
              <IconButton
                sx={{ position: "absolute", right: "25px", top: "25px" }}
                size="large"
                onClick={handleCrossBtn}>
                <CancelIcon color="error" fontSize="inherit" />
              </IconButton>
              <Form
                selectedDate={selectedDate}
                title={title}
                setTitle={setTitle}
                description={description}
                setDescription={setDescription}
                handleAddTaskBtn={handleAddTaskBtn}
              />
            </Box>
          </Box>
        )}
      </Box>
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          marginTop: "5px",
          color: "white",
          ...(value.getFullYear() === new Date().getFullYear() &&
            value.getMonth() === new Date().getMonth() &&
            value.getDate() === new Date().getDate() && {
              backgroundColor: "purple",
              paddingLeft: "10px",
              paddingRight: "10px",
              borderRadius: "5px",
              fontWeight: "bold",
            }),
        }}>
        {value.getDate()}
      </Typography>
      <TaskBox tasks={tasks} value={value} />
    </Box>
  );
}
