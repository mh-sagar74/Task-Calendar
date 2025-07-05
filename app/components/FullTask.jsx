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
        <DialogTitle
          sx={{ backgroundColor: "rgba(0, 29, 61)", color: "white" }}>
          <Typography gutterBottom sx={{ fontSize: "30px" }}>
            Task for{" "}
            {viewFullTask.chosenDate.toLocaleDateString("default", {
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
