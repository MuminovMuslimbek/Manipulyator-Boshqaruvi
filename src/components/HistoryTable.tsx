import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const HistoryTable = () => {
    return (
        <TableContainer component={Paper} sx={{ mt: 3 }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Asl Buyruq</TableCell>
                        <TableCell>Optimallashtirilgan Buyruq</TableCell>
                        <TableCell>Sana/Vaqt</TableCell>
                        <TableCell>Namunalar Joylashuvi</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* Ma'lumotlar bu yerda ko'rsatiladi */}
                    <TableRow>
                        <TableCell>ЛЛЛЛВВПППОНННБ</TableCell>
                        <TableCell>4Л2В3ПО3НБ</TableCell>
                        <TableCell>2023-10-01 12:00</TableCell>
                        <TableCell>X: 3, Y: 5</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default HistoryTable;