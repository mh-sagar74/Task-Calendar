import { Box, Typography } from "@mui/material";

export default function TaskBox({ tasks, selectedDate }) {
  return (
    <Box>
      {tasks.map((task) =>
        task.chosenDate === selectedDate ? (
          <Typography
            key={task.id}
            sx={{ width: "150px", backgroundColor: "blue", color: "white" }}
            gutterBottom>
            {task.heading} {console.log(task.heading)}
          </Typography>
        ) : (
          ""
        )
      )}
    </Box>
  );
}
