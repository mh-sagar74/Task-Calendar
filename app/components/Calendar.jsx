"use client";

import { Box, Stack, Typography } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import DateBox from "./DateBox";
import { useEffect, useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import IconButton from "@mui/material/IconButton";

export default function Calendar() {
  const weeks = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const [currentDate, setCurrentDate] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState([]);
  const [startDate, setStartDate] = useState(0);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const date = new Date(year, month, 1);
    const days = [];

    while (date.getMonth() === currentDate.getMonth()) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    setDaysInMonth(days);
    setStartDate(new Date(year, month, 1).getDay());
  }, [currentDate]);

  const handleNextMonthBtn = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  };

  const handleNextYearBtn = () => {
    setCurrentDate(
      new Date(currentDate.setFullYear(currentDate.getFullYear() + 1))
    );
  };

  const handlePrevYear = () => {
    setCurrentDate(
      new Date(currentDate.setFullYear(currentDate.getFullYear() - 1))
    );
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
  };

  const handleCurrentDate = () => {
    setCurrentDate(new Date());
  };

  return (
    <Box
      sx={{
        backgroundColor: "yellow",
        justifyItems: "center",
        paddingTop: "20px",
        paddingBottom: "20px",
      }}>
      <Box
        sx={{
          backgroundColor: "red",
          width: "1100px",
          paddingBottom: "5px",
          paddingTop: "10px",
          borderTopLeftRadius: "70px",
          borderTopRightRadius: "70px",
        }}>
        <Typography
          variant="h3"
          gutterBottom
          sx={{ textAlign: "center" }}
          onClick={handleCurrentDate}>
          CALENDAR - {currentDate.getFullYear()}
        </Typography>
        <Stack
          direction={"row"}
          spacing={5}
          sx={{
            alignItems: "center",
            justifyContent: "center",
          }}>
          <IconButton size="large" onClick={handlePrevYear}>
            <KeyboardDoubleArrowLeftIcon fontSize="inherit" />
          </IconButton>
          <IconButton size="large" onClick={handlePrevMonth}>
            <KeyboardArrowLeftIcon fontSize="inherit" />
          </IconButton>
          <Typography variant="h5">
            {currentDate.toLocaleString("default", { month: "long" })}
          </Typography>
          <IconButton size="large" onClick={handleNextMonthBtn}>
            <KeyboardArrowRightIcon fontSize="inherit" />
          </IconButton>
          <IconButton size="large" onClick={handleNextYearBtn}>
            <KeyboardDoubleArrowRightIcon fontSize="inherit" />
          </IconButton>
        </Stack>
      </Box>
      <Box sx={{ backgroundColor: "#001d3d", paddingTop: "20px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "1100px",
            justifySelf: "center",
          }}>
          {weeks.map((week) => (
            <Typography
              variant="h6"
              gutterBottom
              key={uuidv4()}
              sx={{
                width: "120px",
                paddingTop: "5px",
                paddingBottom: "5px",
                textAlign: "center",
                backgroundColor: "#001d3d",
                border: "1px solid white",
                color: "white",
                marginLeft: "15px",
                marginRight: "15px",
                borderRadius: "6px",
                marginBottom: "30px",
              }}>
              {week}
            </Typography>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "1050px",
            justifySelf: "center",
            flexWrap: "wrap",
          }}>
          {Array.from({ length: startDate }).map((_) => (
            <Box
              key={uuidv4()}
              sx={{
                width: "120px",
                height: "120px",
                textAlign: "center",
                backgroundColor: "#001d3d",
                border: "1px solid white",
                borderRadius: "6px",
                marginLeft: "15px",
                marginRight: "15px",
                justifyItems: "center",
                overflow: "auto",
                position: "relative",
                marginBottom: "30px",
              }}
            />
          ))}
          {daysInMonth.map((days) => (
            <DateBox
              key={days}
              value={days}
              daysInMonth={daysInMonth}
              tasks={tasks}
              setTasks={setTasks}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
