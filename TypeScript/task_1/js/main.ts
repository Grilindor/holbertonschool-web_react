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

console.log(teacher);
console.log(director1);
console.log(printTeacher("John", "Doe"));



