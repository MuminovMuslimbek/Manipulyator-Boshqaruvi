import { TextField, Button, Box } from "@mui/material";

interface CommandInputProps {
  commands: string;
  setCommands: (value: string) => void;
}

const CommandInput = ({ commands, setCommands }: CommandInputProps) => {
  return (
    <Box sx={{ display: "flex", gap: 2, width: "600px", alignItems: "center" }}>
      <TextField
        label="Buyruqlarni kiriting"
        value={commands}
        onChange={(e) => setCommands(e.target.value)}
        fullWidth
      />
    </Box>
  );
};

export default CommandInput;
