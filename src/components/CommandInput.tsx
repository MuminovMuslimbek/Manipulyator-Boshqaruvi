import { TextField, Button, Box } from '@mui/material';

interface CommandInputProps {
    commands: string;
    setCommands: (value: string) => void;
    onOptimize: () => void;
}

const CommandInput = ({ commands, setCommands, onOptimize }: CommandInputProps) => {
    return (
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <TextField
                label="Buyruqlarni kiriting"
                value={commands}
                onChange={(e) => setCommands(e.target.value)}
                fullWidth
            />
            <Button variant="contained" onClick={onOptimize}>
                Optimallashtirish
            </Button>
        </Box>
    );
};

export default CommandInput;