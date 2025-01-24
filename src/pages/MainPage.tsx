import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Slider,
  Snackbar,
} from "@mui/material";
import CommandInput from "../components/CommandInput";
import Visualization from "../components/Visualization";
import HistoryTable from "../components/HistoryTable";

const MainPage = () => {
  const [commands, setCommands] = useState("");
  const [optimizedCommands, setOptimizedCommands] = useState("");
  const [speed, setSpeed] = useState(1);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleOptimize = () => {
    // Optimallashtirish logikasi
    const optimized = commands.replace(
      /(Л{2,}|П{2,}|В{2,}|Н{2,})/g,
      (match) => `${match.length}${match[0]}`
    );
    setOptimizedCommands(optimized);
  };

  const handleSend = () => {
    setOpenSnackbar(true);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Manipulyator Boshqaruvi
      </Typography>
      <CommandInput
        commands={commands}
        setCommands={setCommands}
        onOptimize={handleOptimize}
      />
      <Box sx={{ mt: 3 }}>
        <Typography>Animatsiya tezligi:</Typography>
        <Slider
          value={speed}
          onChange={(e, value) => setSpeed(value as number)}
          min={0.1}
          max={2}
          step={0.1}
        />
      </Box>
      <Visualization speed={0} />
      <Button variant="contained" onClick={handleSend} sx={{ mt: 2 }}>
        Yuborish
      </Button>
      <HistoryTable />
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        message="Operatsiya muvaffaqiyatli bajarildi!"
      />
    </Box>
  );
};

export default MainPage;
