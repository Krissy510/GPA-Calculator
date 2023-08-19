import {SubjectProps} from "../../Interfaces.ts";
import {Grid, Typography} from "@mui/material";
import SubjectDisplay from "./SubjectDisplay.tsx";
import {useCallback, useState} from "react";
import SubjectInput from "./SubjectInput.tsx";
import AddButton from "../Buttons/AddButton.tsx";
import DeleteButton from "../Buttons/DeleteButton.tsx";


const Subject = ({subjects, setSubjects, grades}: SubjectProps) => {

    const [selectedSubjects, setSelectedSubjects] = useState<Array<string>>(Array<string>);
    const [name, setName] = useState<string>("");
    const [credit, setCredit] = useState<number>(0);
    const [grade, setGrade] = useState<string>("");


    const handleAdd = useCallback(() => {
        setSubjects([...subjects, {name, credit, grade}]);
    },[subjects, name, credit, grade, setSubjects]);

    const handleDelete = useCallback(() => {
        setSubjects(subjects.filter(subject => !selectedSubjects.includes(subject.name)));
    }, [selectedSubjects, subjects, setSubjects]);

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
                Subject
            </Typography>
            <SubjectDisplay
                subjects={subjects}
                setSelectedSubjects={setSelectedSubjects}
            />

            <div className='controls-panel'>
                <SubjectInput
                    setName={setName}
                    credit={credit}
                    setCredit={setCredit}
                    grades={grades}
                    setGrade={setGrade}
                />
                <AddButton onClick={handleAdd} disabled={
                    (name === '' && grade === '') ||
                    subjects.some(subject => subject.name === name)
                }/>
                <DeleteButton onClick={handleDelete} disabled={!(selectedSubjects.length > 0)}/>
            </div>
        </Grid>
    );
}

export default Subject;