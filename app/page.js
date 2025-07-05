"use client";

import { Box } from "@mui/material";
import Calendar from "./components/Calendar";
import { SparklesCore } from "./components/ui/sparkles";

export default function Home() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        backgroundColor: "black",
        overflow: "hidden",
      }}>
      <Box
        sx={{
          width: "100%",
          position: "absolute",
          inset: 0,
          height: "100%",
        }}>
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </Box>
      <Box sx={{ position: "relative", zIndex: 20, margin: "10px" }}>
        <Calendar />
      </Box>
    </Box>
  );
}
