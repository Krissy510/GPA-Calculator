import './App.css'
import NavBar from "./components/NavBar.tsx";
import Subject from "./components/Subject/Subject.tsx";
import {Button, Grid, Typography} from "@mui/material";
import {useCallback, useEffect, useState} from "react";
import {ISubject} from "./Interfaces.ts";
import Grade from "./components/Grade/Grade.tsx";

function App() {

    const initialSubjects: Array<ISubject> = localStorage.getItem('subjects')
        ? JSON.parse(localStorage.getItem('subjects') as string)
        : [];
    const initialGrades: Map<string, number> = localStorage.getItem('grades')
        ? new Map<string, number>(JSON.parse(localStorage.getItem('grades') as string))
        : new Map<string, number>();

    const [subjects, setSubjects] = useState<Array<ISubject>>(initialSubjects);
    const [grades, setGrades] = useState<Map<string,number>>(initialGrades);
    const [gpa, setGpa] = useState<number>(0);

    const handleCalculate=  useCallback(() => {
        let totalGpa = 0;
        let totalCredit =  0;
        subjects.forEach((subject) => {
            const gradeValue = grades.get(subject.grade)?? 0;
            totalGpa += subject.credit * Number(gradeValue);
            totalCredit += subject.credit;

        });
        setGpa(totalGpa/Math.max(1,totalCredit));
    },[subjects,grades]);

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
                sx={{
                    gap: {
                        lg: 5,
                        md: 3,
                    },
                    paddingY: "20px",
                    paddingX: {
                        md: "30px",
                        lg: "40px",
                    },
                }}
            >
                <Grid item lg={5} md={6}>
                    <Subject
                        subjects={subjects}
                        setSubjects={setSubjects}
                        grades={Array.from(grades.keys())}
                    />
                </Grid>
                <Grid item lg={3} md={4}>
                    <Grade grades={grades} setGrades={setGrades}/>
                </Grid>
                <Grid item lg={2} md={1}>
                    <Grid
                        container
                        direction="column"
                        justifyContent="flex-end"
                        gap={2}
                        sx={{
                            marginTop: {
                                lg: "2.5rem",
                                md: "5.5vh",
                            },
                        }}
                    >
                        <Typography
                            sx={{
                                border: "1px solid rgba(224, 224, 224, 1);",
                                borderRadius: "10px",
                                width: "9vw",
                                padding: "10px",
                            }}
                            variant="subtitle1"
                        >
                            GPA: {gpa.toPrecision(4)}
                        </Typography>

                        <Button
                            variant="contained"
                            disabled={!(grades.size > 0 && subjects.length > 0)}
                            sx={{
                                width: {
                                    lg: "10.5vw",
                                    md: "11vw"
                                },
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