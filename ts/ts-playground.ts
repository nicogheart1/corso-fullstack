let firstNumber = 34;

let firstName: string = "Mario";

let firstBoolean: boolean = true;

let firstNull: null = null;

let firstUndefined: undefined = undefined;

const somma = (a: number, b: number, c: number = 0): number => {
    console.log("this is a test", a + b + c);
    return a + b + c;
}

somma(1, 2);


type Age = number;

interface PersonI {
    readonly name: string;
    readonly surname: string;
    age: Age;
}
interface PersonI {
    favouriteColour?: string;
}

type StudentAddressI = {
    id: string;
    streetName: string;
}

interface StudentI extends PersonI {
    address?: StudentAddressI;
}

const student: StudentI = {
    name: "Mario",
    surname: "Rossi",
    age: 18
};

//student.surname = "Rossi"

//student.name = "Luca"

const printStudent = (studentToPrint: StudentI): void => {
    console.log("Il nome dello studente è:", studentToPrint.name)
}

printStudent({ name: "Mario" } as StudentI);
printStudent(student);


const numbers: number[] = [1, 2, 3, 4, 5];
const names: readonly string[] = ["Mario", "Luca", "Sara", 4]

numbers.push(6);

names.push("Gennaro")


const students: StudentI[] = [student]

const people: { name: string; age: number }[] = [{ name: "Mario", age: 33 }]