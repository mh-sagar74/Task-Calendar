import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

export default function FullTask({
  viewFullTask,
  openFullTask,
  setOpenFullTask,
}) {
  return (
    <Box>
      <Dialog open={openFullTask} onClose={() => setOpenFullTask(false)}>
        <DialogTitle>
          <Typography variant="h4" gutterBottom>
            Task for{" "}
            {viewFullTask.chosenDate.toLocaleDateString("default", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Typography gutterBottom sx={{ fontSize: "24px" }}>
            <span className="font-bold">Task Title :</span>{" "}
            {viewFullTask.heading}
          </Typography>
          <Typography gutterBottom sx={{ fontSize: "24px" }}>
            <span className="font-bold">Task Description :</span>{" "}
            {viewFullTask.details}
          </Typography>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
