import './App.css'
import NavBar from "./components/NavBar.tsx";
import Subject from "./components/Subject/Subject.tsx";
import {Button, Grid, TextField, Typography} from "@mui/material";
import {useState} from "react";
import {ISubject} from "./Interfaces.ts";

function App() {

    const [subjects, setSubjects] = useState(Array<ISubject>);
    const [gpa, setGpa] = useState(0);

  return (
    <>
        <NavBar/>
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            gap={5}
            sx={{
                padding: "20px 40px",
            }}
        >
            <Grid item xs>
                <Subject subjects={subjects} setSubjects={setSubjects} />
            </Grid>
            <Grid item xs>
                {/*Grade*/}
            </Grid>
            <Grid item xs>
                {/*GPA*/}
                <Grid
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems='flex-start'
                    gap={2}
                    height={185}
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
                        GPA: {gpa}
                    </Typography>

                    <Button
                        variant="contained"
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