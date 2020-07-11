let studentGrades = [
  { name: 'StudentA', grade: 90.1 },
  { name: 'StudentB', grade: 92 },
  { name: 'StudentC', grade: 91.8 },
  { name: 'StudentD', grade: 95.23 },
  { name: 'StudentE', grade: 91.81 },
];

function compareGrades(student1, student2) { // sorted in descending order
  if (student1.grade < student2.grade) return 1;
  if (student1.grade > student2.grade) return -1;
  return 0;
}

console.log(studentGrades.sort(compareGrades));
