import {GradeDisplayProps} from "../../Interfaces.ts";
import {DataGrid, GridColDef} from "@mui/x-data-grid";

const columns: GridColDef[] = [
    {
        field: 'symbol',
        headerName: 'Symbol',
        headerAlign: 'center',
        align: 'center',
        width: 150,
    },
    {
        field: 'value',
        headerName: 'Value',
        type: 'number',
        headerAlign: 'center',
        align: 'center',
        width: 150,
    },
]

const GradeDisplay = ({grades, setSelectedGrades}: GradeDisplayProps) => {
    return (
        <DataGrid
            getRowId={(row) => row.symbol}
            rows={Array.from(grades.entries()).map(([symbol, value]) => ({symbol, value}))}
            columns={columns}
            checkboxSelection
            pageSizeOptions={[]}
            onRowSelectionModelChange={(names) => {
                setSelectedGrades(names.map((name) => name.toString()));
            }}
        />
    );
}

export default GradeDisplay;