import {ISubjectProps} from "../../Interfaces.ts";
import {Grid, Typography} from "@mui/material";
import SubjectDisplay from "./SubjectDisplay.tsx";
import {useEffect, useState} from "react";
import SubjectInput from "./SubjectInput.tsx";
import AddButton from "../General/AddButton.tsx";
import DeleteButton from "../General/DeleteButton.tsx";


const Subject = ({subjects, setSubjects, grades}: ISubjectProps) => {

    const [selectedSubjects, setSelectedSubjects] = useState<Array<string>>(Array<string>);
    const [name, setName] = useState<string>("");
    const [credit, setCredit] = useState<number>(0);
    const [grade, setGrade] = useState<string>("");
    const [canAdd, setCanAdd] = useState<boolean>(false);
    const [canDelete, setCanDelete] = useState<boolean>(false);


    const checkAdd = (): boolean => {
        return name !== '' && grade !== '';
    }

    const checkDuplicate = (name: string): boolean => {
        return subjects.some(subject => subject.name === name);
    }

    const handleAdd = () => {
        setSubjects([...subjects, {name, credit, grade}]);
        setCanAdd(checkDuplicate(name));
    }

    const handleDelete = () => {
        setSubjects(subjects.filter(subject => !selectedSubjects.includes(subject.name)));
        setCanAdd(checkDuplicate(name));

    }

    useEffect(() => {
        setCanAdd(checkAdd() && !checkDuplicate(name));
    }, [name, credit, grade]);

    useEffect(() => {
        setCanDelete(selectedSubjects.length > 0);
    }, [selectedSubjects]);


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

            <div className={'controls-panel'}>
                <SubjectInput
                    setName={setName}
                    credit={credit}
                    setCredit={setCredit}
                    grades={grades}
                    setGrade={setGrade}
                />
                <AddButton onClick={handleAdd} disabled={!canAdd}/>
                <DeleteButton onClick={handleDelete} disabled={!canDelete}/>
            </div>
        </Grid>
    );
}

export default Subject;