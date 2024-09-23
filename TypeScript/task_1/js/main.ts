export interface Teacher {
	firstName: string;
	lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;
}

const teacher: Teacher = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: true,
    location: "New York",
    contract: true, // Exemple additionnal attribut
};

console.log(teacher);
