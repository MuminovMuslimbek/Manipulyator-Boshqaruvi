import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

interface VisualizationProps {
    commands: string;
    speed: number;
}

const Visualization = ({ commands, speed }: VisualizationProps) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < commands.length) {
                const command = commands[index];
                setPosition((prev) => {
                    switch (command) {
                        case 'Л': return { ...prev, x: prev.x - 1 };
                        case 'П': return { ...prev, x: prev.x + 1 };
                        case 'В': return { ...prev, y: prev.y - 1 };
                        case 'Н': return { ...prev, y: prev.y + 1 };
                        default: return prev;
                    }
                });
                index++;
            } else {
                clearInterval(interval);
            }
        }, 1000 / speed);

        return () => clearInterval(interval);
    }, [commands, speed]);

    return (
        <Box sx={{ width: 400, height: 400, border: '1px solid black', position: 'relative' }}>
            <Box
                sx={{
                    width: 40,
                    height: 40,
                    bgcolor: 'primary.main',
                    position: 'absolute',
                    left: position.x * 40,
                    top: position.y * 40,
                }}
            />
        </Box>
    );
};

export default Visualization;