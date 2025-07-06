"use client";

import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";

export default function AllTasks({ tasks }) {
  const [showTask, setShowTask] = useState(false);
  const [selectedTask, setSelectedTask] = useState({});
  const [viewFullTaskClicked, setViewFullTaskClicked] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchedTaskes, setSearchedTasks] = useState([]);

  const handleShowTask = (key) => {
    const oneTask = tasks.find((task) => task.id === key);
    setSelectedTask(oneTask);
    setShowTask(true);
    setViewFullTaskClicked(true);
  };

  useEffect(() => {
    setSearchedTasks(tasks);
  }, [tasks]);

  const handleCloseTask = () => {
    setShowTask(false);
  };

  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
    if (!searchValue) {
      setSearchedTasks(tasks);
    }
  };

  const handleSearchBtn = () => {
    const searchRes = tasks.filter((task) => task.heading === searchValue);
    setSearchedTasks(searchRes);
  };

  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "rgba(255, 0, 0, 0.6)",
          color: "white",
          paddingBottom: "5px",
          paddingTop: "10px",
          borderTopLeftRadius: "50px",
          borderTopRightRadius: "50px",
        }}>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", fontWeight: "bold" }}>
          All Tasks
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "rgba(255, 0, 0, 0.6)",
          paddingLeft: "10px",
          paddingRight: "10px",
        }}>
        {tasks.length > 0 && (
          <Box>
            <TextField
              variant="filled"
              label="Search"
              value={searchValue}
              onChange={handleSearchValue}
              sx={{
                input: { color: "white" },
                "& .MuiFormLabel-root": {
                  color: "white",
                },
                width: "87%",
              }}
            />
            {searchValue ? (
              <IconButton
                size="large"
                sx={{ color: "white" }}
                type="submit"
                onClick={handleSearchBtn}>
                <ContentPasteSearchIcon fontSize="inherit" />
              </IconButton>
            ) : (
              <IconButton size="large" sx={{ color: "white" }} disabled>
                <ContentPasteSearchIcon fontSize="inherit" />
              </IconButton>
            )}
          </Box>
        )}
      </Box>
      <Box
        sx={{
          backgroundColor: "rgba(0, 29, 61,0.6)",
          padding: "15px",
          height: "896px",
          borderBottomLeftRadius: "5px",
          borderBottomRightRadius: "5px",
          overflow: "auto",
        }}>
        {searchValue ? (
          <Box>
            {searchedTaskes.map((task) => (
              <Box
                key={task.id}
                onClick={() => handleShowTask(task.id)}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  backgroundColor: "#219ebc",
                  color: "white",
                  borderRadius: "3px",
                  marginBottom: "10px",
                  paddingLeft: "5px",
                  paddingRight: "5px",
                  fontSize: "16px",
                  ":hover": {
                    cursor: "pointer",
                    backgroundColor: "rgba(55, 182, 214)",
                    transition: "0.2s",
                  },
                }}>
                <Typography sx={{ color: "white" }}>
                  <span>{task.heading.slice(0, 25)}</span>
                  {task.heading.length > 25 && <span>...</span>}
                </Typography>
                <Typography sx={{ color: "white" }}>
                  {task.chosenDate.toLocaleDateString("default", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </Typography>
              </Box>
            ))}
          </Box>
        ) : (
          <Box>
            {tasks.length > 0 ? (
              tasks.map((task) => (
                <Box
                  key={task.id}
                  onClick={() => handleShowTask(task.id)}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    backgroundColor: "#219ebc",
                    color: "white",
                    borderRadius: "3px",
                    marginBottom: "10px",
                    paddingLeft: "5px",
                    paddingRight: "5px",
                    fontSize: "16px",
                    ":hover": {
                      cursor: "pointer",
                      backgroundColor: "rgba(55, 182, 214)",
                      transition: "0.2s",
                    },
                  }}>
                  <Typography sx={{ color: "white" }}>
                    <span>{task.heading.slice(0, 25)}</span>
                    {task.heading.length > 25 && <span>...</span>}
                  </Typography>
                  <Typography sx={{ color: "white" }}>
                    {task.chosenDate.toLocaleDateString("default", {
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </Typography>
                </Box>
              ))
            ) : (
              <Typography
                sx={{
                  fontSize: "24px",
                  color: "white",
                  textAlign: "center",
                }}>
                You have no tasks
              </Typography>
            )}
          </Box>
        )}
      </Box>
      {viewFullTaskClicked && (
        <Dialog open={showTask} onClose={handleCloseTask}>
          <DialogTitle
            sx={{ backgroundColor: "rgba(0, 29, 61)", color: "white" }}>
            <Typography gutterBottom sx={{ fontSize: "30px" }}>
              Task for{" "}
              {selectedTask.chosenDate.toLocaleDateString("default", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </Typography>
          </DialogTitle>
          <DialogContent
            sx={{ backgroundColor: "rgba(0, 29, 61)", color: "white" }}>
            <Typography gutterBottom sx={{ fontSize: "24px" }}>
              <span className="font-bold">Task Title :</span>{" "}
              {selectedTask.heading}
            </Typography>
            <Typography gutterBottom sx={{ fontSize: "24px" }}>
              <span className="font-bold">Task Description :</span>{" "}
              {selectedTask.details}
            </Typography>
          </DialogContent>
        </Dialog>
      )}
    </Box>
  );
}
