// Interface Student
export interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
  }

  // Création de deux étudiants
  const student1: Student = {
	firstName: 'John',
	lastName: 'Doe',
	age: 20,
	location: 'New York'
  };

  const student2: Student = {
	firstName: 'Jane',
	lastName: 'Smith',
	age: 22,
	location: 'Los Angeles'
  };

  // Liste des étudiants
  export const studentsList: Student[] = [student1, student2];

  // Fonction pour générer le tableau HTML
  export function renderStudentsTable(students: Student[]): void {
	const table = document.createElement('table');

	// Création de l'en-tête
	const headerRow = document.createElement('tr');
	const headerFirstName = document.createElement('th');
	headerFirstName.textContent = 'First Name';
	const headerLocation = document.createElement('th');
	headerLocation.textContent = 'Location';
	headerRow.appendChild(headerFirstName);
	headerRow.appendChild(headerLocation);
	table.appendChild(headerRow);

	// Ajout des lignes de données
	students.forEach((student) => {
	  const row = document.createElement('tr');
	  const firstNameCell = document.createElement('td');
	  firstNameCell.textContent = student.firstName;
	  const locationCell = document.createElement('td');
	  locationCell.textContent = student.location;
	  row.appendChild(firstNameCell);
	  row.appendChild(locationCell);
	  table.appendChild(row);
	});

	// Ajout du tableau au body du document
	document.body.appendChild(table);
  }

  // Appel de la fonction
  renderStudentsTable(studentsList);
