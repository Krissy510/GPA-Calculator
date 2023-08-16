export interface ISubject {
    name: string;
    credit: number;
    grade: string;
}

export interface ISubjectProps{
    subjects: Array<ISubject>;
    setSubjects(subjects: Array<ISubject>): void;
}

export interface ISubjectDisplayProps{
    subjects: Array<ISubject>;
    setSelectedSubjects(selectedSubjects: Array<string>): void;
}

export interface ISubjectInputProps{
    setSubjectName(subjectName: string): void;
    credit: number;
    setCredit(credit: number): void;
    setGrade(grade: string): void;
}