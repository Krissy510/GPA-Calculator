import {ISubjectInputProps} from "../../Interfaces.ts";
import {Grid, TextField} from "@mui/material";

const SubjectInput = ({setSubjectName, credit, setGrade, setCredit}:ISubjectInputProps) => {

    return (
        <Grid
            container
            gap={2}
        >
            <TextField
                label={"Name"}
                multiline
                sx={{
                    width:230,
                }}
                onChange={(e) => setSubjectName(e.target.value)}
            ></TextField>
            <TextField
                label={"Credit"}
                value={credit}
                sx={{
                    width:70,
                }}
                type={"number"}
                onClick={(e) => {
                    (e.target as HTMLInputElement).select();
                }}
                onChange={(e) => {
                    setCredit(Math.max(0,Number(e.target.value)))
                }}
            ></TextField>
            <TextField
                label={"Grade"}
                sx={{
                    width:75,
                }}
                onChange={(e) => setGrade(e.target.value)}
            ></TextField>
        </Grid>
    );
}

export default SubjectInput;