// import { useState } from "react";
// import { Typography, Button, Snackbar } from "@mui/material";
// import CommandInput from "../components/CommandInput";
// import Visualization from "../components/Visualization";
// import HistoryTable from "../components/HistoryTable";
// import { Box } from "@mui/material";
// import { useDispatch } from "react-redux";
// import { addToHistory } from "../features/commandsSlice";

// const MainPage = () => {
//   const [commands, setCommands] = useState("");
//   const [optimizedCommands, setOptimizedCommands] = useState("");
//   const [openSnackbar, setOpenSnackbar] = useState(false);
//   const dispatch = useDispatch();

//   const handleOptimize = () => {
//     const optimized = commands.replace(
//       /(Л{2,}|П{2,}|В{2,}|Н{2,})/g,
//       (match) => `${match.length}${match[0]}`
//     );
//     setOptimizedCommands(optimized);
//   };

//   const handleSend = () => {
//     handleOptimize();
//     dispatch(
//       addToHistory({
//         original: commands,
//         optimized: optimizedCommands,
//         date: new Date().toISOString(),
//       })
//     );
//     setOpenSnackbar(true);
//   };

//   return (
//     <Box sx={{ padding: 3, maxWidth: "1400px", margin: "0px auto" }}>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         <div>
//           <Visualization
//             speed={10}
//             commands={optimizedCommands}
//             onCommandComplete={() => {}}
//           />
//         </div>

//         <div>
//           <Typography variant="h4" gutterBottom>
//             Manipulyator Boshqaruvi
//           </Typography>
//           <Box sx={{ display: "flex" }}>
//             <CommandInput commands={commands} setCommands={setCommands} />
//             <Button
//               variant="contained"
//               onClick={handleSend}
//               sx={{ width: "full" }}
//             >
//               Tastiqlash
//             </Button>
//           </Box>
//           <HistoryTable />
//         </div>
//       </div>

//       <Snackbar
//         open={openSnackbar}
//         autoHideDuration={3000}
//         onClose={() => setOpenSnackbar(false)}
//         message="Operatsiya muvaffaqiyatli bajarildi!"
//       />
//     </Box>
//   );
// };

// export default MainPage;
import { useState } from "react";
import { Typography, Button, Snackbar } from "@mui/material";
import CommandInput from "../components/CommandInput";
import Visualization from "../components/Visualization";
import HistoryTable from "../components/HistoryTable";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToHistory } from "../features/commandsSlice";

const MainPage = () => {
  const [commands, setCommands] = useState("");
  const [optimizedCommands, setOptimizedCommands] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const dispatch = useDispatch();

  const handleOptimize = () => {
    const optimized = commands.replace(
      /(л{2,}|п{2,}|в{2,}|н{2,})/g,
      (match) => `${match.length}${match[0]}`
    );
    setOptimizedCommands(optimized);
  };

  const handleSend = () => {
    handleOptimize();
    dispatch(
      addToHistory({
        original: commands,
        optimized: optimizedCommands,
        date: new Date().toISOString(),
      })
    );
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
          <Visualization
            speed={10}
            commands={optimizedCommands}
            onCommandComplete={() => {}}
          />
        </div>

        <div>
          <Typography variant="h4" gutterBottom>
            Manipulyator Boshqaruvi
          </Typography>
          <Box sx={{ display: "flex" }}>
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
