import {ISubjectDisplayProps} from "../../Interfaces.ts";
import {DataGrid, GridColDef} from '@mui/x-data-grid';


const cols: GridColDef[] = [
    {
        field: 'name',
        headerName: 'Name',
        editable: true,
    },{
        field: 'credit',
        headerName: 'Credit',
        editable: true,
        type: "number"
    },{
        field: 'grade',
        headerName: 'Grade',
        editable: true,
    },

]

const SubjectDisplay = ({subjects, setSelectedSubjects}: ISubjectDisplayProps) => {
    return (
        <DataGrid
            rows={subjects}
            columns={cols}
            autoHeight={true}
            checkboxSelection
            onRowSelectionModelChange={(names) => {
                setSelectedSubjects(names.map(name => name.toString()));
            }}
        />
    );
}

export default SubjectDisplay;