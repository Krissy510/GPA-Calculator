import {GradeDisplayProps} from "../../Interfaces.ts";
import {DataGrid, GridColDef} from "@mui/x-data-grid";

const columns: GridColDef[] = [
    {
        field: 'symbol',
        headerName: 'Symbol',
        headerAlign: 'left',
        align: 'left',
        flex: 1,
        minWidth: 50,
    },
    {
        field: 'value',
        headerName: 'Value',
        type: 'number',
        headerAlign: 'left',
        align: 'left',
        flex: 1,
        minWidth: 50,
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