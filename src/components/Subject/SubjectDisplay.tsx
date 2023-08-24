import {DataGrid, GridColDef} from "@mui/x-data-grid";
import {SubjectDisplayProps} from "../../Interfaces.ts";

const columns: GridColDef[] = [
    {
        field: 'name',
        headerName: 'Name',
        flex: 1,
        minWidth: 200,
        maxWidth: 250,
    },
    {
        field: 'credit',
        headerName: 'Credit',
        flex: 1,
        minWidth: 30,
        maxWidth: 120,
        type: 'number',
        headerAlign: 'left',
        align: 'left',
    },
    {
        field: 'grade',
        flex: 1,
        minWidth: 20,
        maxWidth: 120,
        headerName: 'Grade',
        headerAlign: 'left',
        align: 'left',
    },
]

const SubjectDisplay = ({subjects, setSelectedSubjects}: SubjectDisplayProps) => {
    return (
        <DataGrid
            getRowId={(row) => row.name}
            rows={subjects}
            columns={columns}
            checkboxSelection
            pageSizeOptions={[]}
            onRowSelectionModelChange={(names) => {
                setSelectedSubjects(names.map((name) => name.toString()));
            }}
        />
    );
}

export default SubjectDisplay;