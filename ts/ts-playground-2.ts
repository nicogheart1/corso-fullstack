enum StatoSemaforo {
    Rosso = "Red",
    Arancione = "Orange",
    Verde = "Green",
}


type ColoreSemaforo = "Rosso" | "Arancione" | "Verde";
let semaforo2: ColoreSemaforo  = "rosso";
semaforo2 = "verde"

//let semaforo: StatoSemaforo = "rosso";
let semaforo: StatoSemaforo = StatoSemaforo.Rosso;
semaforo = StatoSemaforo.Verde;

console.log(semaforo)

//semaforo = "blue"

interface StudentI {
    name: string;
    surname: string;
    age?: number;
}

const student: StudentI = {
    name: "Mario",
    surname: "Rossi",
    age: 22
};

student.name = "Luca"

const studentAge: Partial<StudentI> = {age: student.age}
//const studentAge2: StudentI = {age: student.age} as StudentI


const studentRequired: Required<StudentI> = {name: "Mario", surname: "Rossi"}

const readonlyStudent: Readonly<StudentI> = student;
readonlyStudent.name = "Massimo"


const readonlyRequiredStudent:  Readonly<Required<StudentI>> = {name: "Mario", surname: "Rossi"};
readonlyRequiredStudent.name = "Piero"

