import ArrowCircleRightTwoToneIcon from "@mui/icons-material/ArrowCircleRightTwoTone";
import ArrowCircleLeftTwoToneIcon from "@mui/icons-material/ArrowCircleLeftTwoTone";
import IconButton from "@mui/material/IconButton";

export default function Month({ handleRightBtn, handleLeftBtn, cDate }) {
  return (
    <div
      className={`w-[500px] flex justify-between rounded-[25px] bg-gradient-to-b from-red-200 via-white to-red-200`}>
      <IconButton onClick={handleLeftBtn}>
        <ArrowCircleLeftTwoToneIcon fontSize="large" color="secondary" />
      </IconButton>
      <div className="text-3xl font-semibold pt-1">
        {cDate.toLocaleString("default", { month: "long" })}
        {"-"}
        {cDate.getFullYear()}
      </div>
      <IconButton onClick={handleRightBtn}>
        <ArrowCircleRightTwoToneIcon fontSize="large" color="secondary" />
      </IconButton>
    </div>
  );
}
