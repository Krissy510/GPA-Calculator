export interface ISubject {
    name: string;
    credit: number;
    grade: string;
}

export interface ISubjectProps {
    subjects: Array<ISubject>;
    setSubjects: (subjects: Array<ISubject>) => void;
    grades: Array<string>;
}

export interface ISubjectDisplayProps {
    subjects: Array<ISubject>;
    setSelectedSubjects: (selectedSubjects: Array<string>) => void;
}

export interface ISubjectInputProps {
    setName: (name: string) => void;
    credit: number;
    setCredit: (credit: number) => void;
    grades: Array<string>;
    setGrade: (grade: string) => void;
}

export interface IButtonProps {
    disabled?: boolean;
    onClick: () => void;
}

export interface IGradeProps {
    grades: Map<string, number>;
    setGrades: (grades: Map<string, number>) => void;
}

export interface IGradeDisplayProps {
    grades: Map<string, number>;
    setSelectedGrades: (selectedGrades: Array<string>) => void;
}

export interface IGradeInputProps {
    setSymbol: (symbol: string) => void;
    value: number;
    setValue: (value: number) => void;
}
