import {ISubjectProps} from "../../Interfaces.ts";
import {Grid, Typography} from "@mui/material";
import SubjectDisplay from "./SubjectDisplay.tsx";
import {useEffect, useState} from "react";
import SubjectInput from "./SubjectInput.tsx";


const Subject = ({subjects, setSubjects}: ISubjectProps) => {

    const [selectedSubject, setSelectedSubject] = useState(Array<string>);
    const [name, setName] = useState("");
    const [credit, setCredit] = useState(0);
    const [grade, setGrade] = useState("");
    const [canAdd, setCanAdd] = useState(false);

    const checkDelete = (): boolean => {
        return selectedSubject.length > 0;
    }

    const checkAdd = (): boolean => {
        return name !== '' && grade !== '';
    }

    const checkDuplicate = (name: string): boolean => {
        return subjects.some(subject => subject.name === name);
    }

    const handleAdd = () => {
        setSubjects([...subjects,{name,credit,grade}]);
    }

    const handleDelete = () => {
        setSubjects(subjects.filter(subject => !selectedSubject.includes(subject.name)));
    }

    const handleClear = () => {
        setSelectedSubject([]);
    }

    useEffect(() => {
        setCanAdd(checkAdd() && !checkDuplicate(name));
    }, [name,credit,grade]);



    return (
        <Grid
            container
            direction="column"
            justifyContent="flex-start"
            gap={1}
        >
            <Typography
                variant={'h6'}
            >
                Subjects
            </Typography>
            <SubjectDisplay
                subjects={subjects}
                setSelectedSubjects={setSelectedSubject}
            />
            <SubjectInput
                setSubjectName={setName}
                credit={credit}
                setCredit={setCredit}
                setGrade={setGrade}
            />

        </Grid>

        );
}

export default Subject;