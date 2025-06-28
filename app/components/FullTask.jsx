import { Box, Grid, Typography } from "@mui/material";

export default function FullTask({ viewFullTask }) {
  return (
    <Box>
      <Grid
        container
        spacing={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "50px",
        }}>
        <Typography variant="h4" gutterBottom>
          Task for{" "}
          {viewFullTask.chosenDate.toLocaleDateString("default", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </Typography>
        <Grid
          container
          spacing={4}
          sx={{ display: "flex", flexDirection: "column", textAlign: "left" }}>
          <Typography gutterBottom variant="h5">
            <span className="font-bold">Task Title :</span>{" "}
            {viewFullTask.heading}
          </Typography>
          <Typography gutterBottom variant="h5">
            <span className="font-bold">Task Description :</span>{" "}
            {viewFullTask.details}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
