/** Renders table based on a list of objects */

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Abebe',
  lastName: 'Kebede',
  age: 25,
  location: 'Ethiopia',
}

const student2: Student = {
  firstName: 'Nanny',
  lastName: 'Macphee',
  age: 20,
  location: 'US',
}

const studentList = [student1, student2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentList.forEach((obj) => {
  const row = document.createElement('tr');
  const frName = document.createElement('td');
  const Loc = document.createElement('td');
  frName.textContent = obj.firstName;
  Loc.textContent = obj.location;
  row.appendChild(frName);
  row.appendChild(Loc);
  tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);
