import { Student, studentsList, renderStudentsTable } from '../js/main';

describe('renderStudentsTable', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('should create a table with student data', () => {
    const students: Student[] = studentsList; // Utilisation de studentsList exporté

    renderStudentsTable(students);

    const table = document.querySelector('table');
    expect(table).not.toBeNull();

    const rows = table?.querySelectorAll('tr');
    expect(rows?.length).toBe(3); // 1 row for the header, 2 rows for students

    const firstRowCells = rows?.[1].querySelectorAll('td');
    expect(firstRowCells?.[0].textContent).toBe('John');
    expect(firstRowCells?.[1].textContent).toBe('New York');
  });
});
