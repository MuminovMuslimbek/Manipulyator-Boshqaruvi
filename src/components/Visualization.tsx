import { useEffect, useState } from "react";
import { Box } from "@mui/material";

interface VisualizationProps {
  speed: number;
}

const Visualization = ({ speed }: VisualizationProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      console.log(event);

      switch (event.key) {
        case "ArrowLeft":
        case "л": // Kirillcha "л" (chap)
          setPosition((prev) => ({ ...prev, x: Math.max(0, prev.x - 1) }));
          break;
        case "ArrowRight":
        case "п": // Kirillcha "п" (o'ng)
          setPosition((prev) => ({ ...prev, x: Math.min(9, prev.x + 1) }));
          break;
        case "ArrowUp":
        case "в": // Kirillcha "в" (yuqori)
          setPosition((prev) => ({ ...prev, y: Math.max(0, prev.y - 1) }));
          break;
        case "ArrowDown":
        case "н": // Kirillcha "н" (past)
          setPosition((prev) => ({ ...prev, y: Math.min(9, prev.y + 1) }));
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {}, 1000 / speed);

    return () => clearInterval(interval);
  }, [speed]);

  return (
    <Box
      sx={{
        width: 400,
        height: 400,
        margin: "60px",
        border: "1px solid black",
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: 40,
          height: 40,
          bgcolor: "primary.main",
          position: "absolute",
          left: position.x * 40,
          top: position.y * 40,
        }}
      />
    </Box>
  );
};

export default Visualization;
