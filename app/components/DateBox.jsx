"use client";

import { Box, Typography } from "@mui/material";
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
  // const [tasks, setTasks] = useState([]);
  const [addTask, setAddTask] = useState(false);
  const [selectedDate, setSelectedDate] = useState([]);

  const handleOpenFormBtn = (value) => {
    const clickedAddBtn = daysInMonth.find((day) => day === value);
    // console.log(clickedAddBtn);
    setAddTask(true);
    setSelectedDate(clickedAddBtn);
  };

  const handleAddTaskBtn = () => {
    setTasks((pre) => [
      ...pre,
      {
        heading: title,
        details: description,
        chosenDate: selectedDate,
        id: uuidv4(),
      },
    ]);
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
        width: "177px",
        height: "250px",
        textAlign: "center",
        backgroundColor: "gray",
        borderRadius: "3px",
        marginLeft: "15px",
        marginRight: "15px",
        justifyItems: "center",
        overflow: "auto",
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
                backgroundColor: "white",
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
              paddingLeft: "5px",
              paddingRight: "5px",
              borderRadius: "50%",
              fontWeight: "bold",
            }),
        }}>
        {value.getDate()}
      </Typography>
      <TaskBox tasks={tasks} selectedDate={selectedDate} />
    </Box>
  );
}
