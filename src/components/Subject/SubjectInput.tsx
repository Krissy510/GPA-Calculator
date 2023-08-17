import {Grid, TextField} from "@mui/material";
import {ISubjectInputProps} from "../../Interfaces.ts";


const SubjectInput = ({setName, credit, setCredit, setGrade}: ISubjectInputProps) => {
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
                sx={{width: 270}}
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
            <TextField
                label="Grade"
                variant="outlined"
                sx={{width: 80}}
                onChange={(e) => {
                    setGrade(e.target.value);
                }}
                onClick={
                    (e) => {
                        (e.target as HTMLInputElement).select();
                    }
                }
            />

        </Grid>
    );
}

export default SubjectInput;
