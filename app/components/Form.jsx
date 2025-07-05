"use client";

import { Box, Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone";

export default function Form({
  selectedDate,
  title,
  setTitle,
  description,
  setDescription,
  handleAddTaskBtn,
}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          marginRight: "50px",
          marginLeft: "50px",
        }}>
        <Typography gutterBottom variant="h4" sx={{ marginBottom: "30px" }}>
          Add Task for{" "}
          {selectedDate.toLocaleDateString("default", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </Typography>
        <TextField
          required
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {title ? (
          <Button
            variant="contained"
            endIcon={<AddCircleTwoToneIcon />}
            onClick={handleAddTaskBtn}>
            ADD
          </Button>
        ) : (
          <Button
            disabled
            variant="contained"
            endIcon={<AddCircleTwoToneIcon />}
            onClick={handleAddTaskBtn}>
            ADD
          </Button>
        )}
      </Grid>
    </Box>
  );
}
