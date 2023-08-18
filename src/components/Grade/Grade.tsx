import {IGradeProps} from "../../Interfaces.ts";
import {Grid, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import GradeInput from "./GradeInput.tsx";
import GradeDisplay from "./GradeDisplay.tsx";
import AddButton from "../General/AddButton.tsx";
import DeleteButton from "../General/DeleteButton.tsx";


const Grade = ({grades, setGrades}: IGradeProps) => {

    const [selectedGrades, setSelectedGrades] = useState<Array<string>>([]);
    const [symbol, setSymbol] = useState<string>("");
    const [value, setValue] = useState<number>(0);
    const [canAdd, setCanAdd] = useState<boolean>(false);
    const [canDelete, setCanDelete] = useState<boolean>(false);


    const handleAdd = () => {
        setGrades(new Map(grades.set(symbol, value)));
        setCanAdd(!grades.has(symbol));
    }

    const handleDelete = () => {
        const newGrades = new Map([...grades].filter(([key]) => !selectedGrades.includes(key)));
        setGrades(newGrades);
    }

    useEffect(() => {
        setCanAdd(symbol !== "" && !grades.has(symbol));
    }, [grades, symbol]);

    useEffect(() => {
        setCanDelete(selectedGrades.length > 0);
    }, [selectedGrades]);

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
                <AddButton onClick={handleAdd} disabled={!canAdd}/>
                <DeleteButton onClick={handleDelete} disabled={!canDelete}/>
            </div>
        </Grid>
    );
}

export default Grade;