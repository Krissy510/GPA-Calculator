import {GradeInputProps} from "../../Interfaces.ts";
import {Grid, TextField} from "@mui/material";

const GradeInput = ({setSymbol, value, setValue}: GradeInputProps) => {
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
                label="Symbol"
                variant="outlined"
                sx={{width: 100}}
                onChange={(e) => {
                    setSymbol(e.target.value);
                }}
                onClick={
                    (e) => {
                        (e.target as HTMLInputElement).select();
                    }
                }
            />
            <TextField
                label="Value"
                variant="outlined"
                type={"number"}
                value={value}
                sx={{
                    width: {
                        lg: 100,
                        md: 60,
                    },
                }}
                onChange={(e) => {
                    setValue(Math.max(0, Number(e.target.value)));
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
export default GradeInput;