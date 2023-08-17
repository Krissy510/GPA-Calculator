import {Grid, TextField} from "@mui/material";
import {ISubjectInputProps} from "../../Interfaces.ts";
import Autocomplete from "@mui/material/Autocomplete";


const SubjectInput = ({setName, credit, setCredit, grades, setGrade}: ISubjectInputProps) => {
    return (
        <Grid
            container
            direction="row"
            alignItems="center"
            sx={{
                gap: 1,
            }}
        >
            <TextField
                label="Name"
                variant="outlined"
                sx={{width: 250}}
                onChange={(e) => {
                    setName(e.target.value);
                }}
            />
            <TextField
                label="Credit"
                variant="outlined"
                value={credit}
                type={"number"}
                sx={{width: 70}}
                inputProps={{min: "0"}}
                onChange={(e) => {
                    setCredit(Math.max(0, Number(e.target.value)));
                }
                }
                onClick={
                    (e) => {
                        (e.target as HTMLInputElement).select();
                    }
                }
            />
            <Autocomplete
                disablePortal
                id="grade-input"
                options={grades}
                sx={{width: 90}}
                onChange={(_, value) => {
                    setGrade(value?? "");
                }}
                onClick={
                    (e) => {
                        (e.target as HTMLInputElement).select();
                    }
                }
                renderInput={(params) => <TextField {...params} label="Grade" />}
            />

        </Grid>
    );
}

export default SubjectInput;
