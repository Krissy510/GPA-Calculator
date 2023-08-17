import './App.css'
import NavBar from "./components/NavBar.tsx";
import Subject from "./components/Subject/Subject.tsx";
import {Button, Grid, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {ISubject} from "./Interfaces.ts";
import Grade from "./components/Grade/Grade.tsx";

function App() {

    const initialSubjects: Array<ISubject> = localStorage.getItem('subjects')
        ? JSON.parse(localStorage.getItem('subjects') as string)
        : [];
    const initialGrades = localStorage.getItem('grades')
        ? new Map<string, number>(JSON.parse(localStorage.getItem('grades') as string))
        : new Map<string, number>();

    const [subjects, setSubjects] = useState(initialSubjects);
    const [grades, setGrades] = useState(initialGrades);
    const [gpa, setGpa] = useState(0);
    const [canCalculate, setCanCalculate] = useState(false);
    const handleCalculate= () => {
        let totalGpa = 0;
        subjects.forEach((subject) => {
            const gradeValue = grades.get(subject.grade)?? 0;
            totalGpa += subject.credit * Number(gradeValue);
        });
        setGpa(totalGpa/subjects.length);
    }

    useEffect(() => {
        setCanCalculate(grades.size > 0 && subjects.length > 0);
    },[grades, subjects]);

    useEffect(() => {
        localStorage.setItem('subjects', JSON.stringify(subjects));
    }, [subjects]);

    useEffect(() => {
        localStorage.setItem('grades', JSON.stringify(Array.from(grades.entries())));
    }, [grades]);

    return (
        <>
            <NavBar/>
            <Grid
                container
                direction="row"
                justifyContent="center"
                gap={5}
                sx={{
                    padding: "20px 40px",
                }}
            >
                <Grid item xs={5}>
                    <Subject
                        subjects={subjects}
                        setSubjects={setSubjects}
                        grades={Array.from(grades.keys())}
                    />
                </Grid>
                <Grid item xs={3}>
                    <Grade grades={grades} setGrades={setGrades}/>
                </Grid>
                <Grid item xs={3}>
                    <Grid
                        container
                        direction="column"
                        justifyContent="flex-end"
                        gap={2}
                        sx={{
                            marginTop: "13%",
                        }}
                    >
                        <Typography
                            sx={{
                                border: "1px solid rgba(224, 224, 224, 1);",
                                borderRadius: "10px",
                                width: "8vw",
                                padding: "10px",
                            }}
                            variant="subtitle1"
                        >
                            GPA: {gpa.toPrecision(4)}
                        </Typography>

                        <Button
                            variant="contained"
                            disabled={!canCalculate}
                            sx={{
                                width: "9vw",
                            }}
                            onClick={handleCalculate}
                        >
                            Calculate
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default App;