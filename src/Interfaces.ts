export interface ISubject {
    name: string;
    credit: number;
    grade: string;
}

export interface SubjectProps {
    subjects: Array<ISubject>;
    setSubjects: (subjects: Array<ISubject>) => void;
    grades: Array<string>;
}

export interface SubjectDisplayProps {
    subjects: Array<ISubject>;
    setSelectedSubjects: (selectedSubjects: Array<string>) => void;
}

export interface SubjectInputProps {
    setName: (name: string) => void;
    credit: number;
    setCredit: (credit: number) => void;
    grades: Array<string>;
    setGrade: (grade: string) => void;
}

export interface ButtonProps {
    disabled?: boolean;
    onClick: () => void;
}

export interface GradeProps {
    grades: Map<string, number>;
    setGrades: (grades: Map<string, number>) => void;
}

export interface GradeDisplayProps {
    grades: Map<string, number>;
    setSelectedGrades: (selectedGrades: Array<string>) => void;
}

export interface GradeInputProps {
    setSymbol: (symbol: string) => void;
    value: number;
    setValue: (value: number) => void;
}
