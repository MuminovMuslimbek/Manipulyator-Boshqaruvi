import { useSelector } from "react-redux";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { RootState } from "../store";

const HistoryTable = () => {
  const history = useSelector((state: RootState) => state.commands.history);

  return (
    <TableContainer
      component={Paper}
      sx={{ maxHeight: "400px", overflow: "scroll" }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Original</TableCell>
            <TableCell>Optimized</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {history.map((entry, index) => (
            <TableRow key={index}>
              <TableCell>{entry.original}</TableCell>
              <TableCell>{entry.optimized}</TableCell>
              <TableCell>{new Date(entry.date).toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HistoryTable;
