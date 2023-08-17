import {DataGrid, GridColDef} from "@mui/x-data-grid";
import {ISubjectDisplayProps} from "../../Interfaces.ts";

const columns: GridColDef[] = [
    {
        field: 'name',
        headerName: 'Name',
        width: 250,
    },
    {
        field: 'credit',
        headerName: 'Credit',
        width: 120,
        type: 'number',
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'grade',
        width: 120,
        headerName: 'Grade',
        headerAlign: 'center',
        align: 'center',
    },
]

const SubjectDisplay = ({subjects, setSelectedSubjects}: ISubjectDisplayProps) => {
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