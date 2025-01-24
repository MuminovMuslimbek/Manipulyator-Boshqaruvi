import { useState } from "react";
import {
  Typography,
  // TextField,
  Button,
  // Slider,
  Snackbar,
} from "@mui/material";
import CommandInput from "../components/CommandInput";
import Visualization from "../components/Visualization";
import HistoryTable from "../components/HistoryTable";
import { Box } from "@mui/material";

const MainPage = () => {
  const [commands, setCommands] = useState("");
  const [optimizedCommands, setOptimizedCommands] = useState("");
  // const [speed, setSpeed] = useState(1);
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
    <Box sx={{ padding: 3, maxWidth: "1400px", margin: "0px auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <Visualization speed={10} />
        </div>

        <div>
          <Typography variant="h4" gutterBottom>
            Manipulyator Boshqaruvi
          </Typography>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <CommandInput commands={commands} setCommands={setCommands} />
            <Button
              variant="contained"
              onClick={handleSend}
              sx={{ width: "full" }}
            >
              Tastiqlash
            </Button>
          </Box>
          <HistoryTable />
        </div>
      </div>

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
