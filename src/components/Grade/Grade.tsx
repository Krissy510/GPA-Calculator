import {GradeProps} from "../../Interfaces.ts";
import {Grid, Typography} from "@mui/material";
import {useCallback, useState} from "react";
import GradeInput from "./GradeInput.tsx";
import GradeDisplay from "./GradeDisplay.tsx";
import AddButton from "../Buttons/AddButton.tsx";
import DeleteButton from "../Buttons/DeleteButton.tsx";


const Grade = ({grades, setGrades}: GradeProps) => {

    const [selectedGrades, setSelectedGrades] = useState<Array<string>>([]);
    const [symbol, setSymbol] = useState<string>("");
    const [value, setValue] = useState<number>(0);

    const handleAdd = useCallback(() => {
        setGrades(new Map(grades.set(symbol, value)));
    },[grades, setGrades, symbol, value]);

    const handleDelete = useCallback(() => {
        const newGrades = new Map([...grades].filter(([key]) => !selectedGrades.includes(key)));
        setGrades(newGrades);
    },[grades, selectedGrades, setGrades]);

    return (
        <Grid
            container
            direction="column"
            justifyContent="flex-start"
            gap={1}
            sx={{
                height: "80vh",
            }}
        >
            <Typography variant={'h6'}>
                Grade
            </Typography>
            <GradeDisplay
                grades={grades}
                setSelectedGrades={setSelectedGrades}
            />

            <div className='controls-panel'>
                <GradeInput setSymbol={setSymbol} value={value} setValue={setValue}/>
                <AddButton onClick={handleAdd} disabled={symbol !== '' && grades.has(symbol)}/>
                <DeleteButton onClick={handleDelete} disabled={!(selectedGrades.length > 0)}/>
            </div>
        </Grid>
    );
}

export default Grade;