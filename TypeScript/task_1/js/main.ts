export interface Teacher {
	firstName: string;
	lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;
}

export interface Directors extends Teacher {
	numberOfReports: number;
}

export interface printTeacher_Fonction {
	(firstName: string, lastName: string): string;
}

export interface InterfaceStudentClass {
	firstName: string;
	lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

export interface StudentConstructor {
    new (firstName: string, lastName: string): InterfaceStudentClass;
}

const director1: Directors = {
	firstName: 'John',
	lastName: 'Doe',
	location: 'London',
	fullTimeEmployee: true,
	numberOfReports: 17,
}

const teacher: Teacher = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: true,
    location: "New York",
    contract: true, // Exemple additionnal attribut
};

export const printTeacher: printTeacher_Fonction = (firstName: string, lastName: string): string => {
	return `${firstName.charAt(0)}. ${lastName}`;
};

export class StudentClass implements InterfaceStudentClass {
	firstName: string;
	lastName: string;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	workOnHomework(): string {
		return "Currently working";
	}

	displayName(): string {
		return this.firstName;
	}
};


console.log(teacher);
console.log(director1);
console.log(printTeacher("John", "Doe"));
const student = new StudentClass("John", "Doe");
console.log(student.displayName()); // John
console.log(student.workOnHomework()); // Currently working


