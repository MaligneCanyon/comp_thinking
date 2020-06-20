let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

// abstractions:
// - for each student in studentScores
//   - generate a student grade
//     - reduce the exam scores to produce an exam average
//     - reduce the exercise score to produce an exercise total
//     - map the score data to a final rounded percent grade
//     - map the percent grade to a letter grade
//   - map the combined grade to the combinedGrades obj

//     Compute the student's average exam score: (90 + 80 + 95 + 71) / 4 = 84
//     Compute the student's total exercise score: 20 + 15 + 40 = 75
//     Apply weights to determine the final percent grade: 84 * .65 + 75 * .35 = 80.85
//     Round the percent grade to the nearest integer: 81
//     Lookup the letter grade in the table above: C
//     Combine the percent grade and letter grade: "81 (C)"

// - for each exam in studentScores
//   - collect exam results for each student in an examResult arr
//   - generate exam average and min/max values
//     - reduce the exam scores to produce an exam average
//     - determine the exam min/max values
//   - push the exam data to the examResults arr

// Generate and return combinedGrades and examResults data
function generateClassRecordSummary(stuScores) {
  let students = Object.keys(stuScores);
  let combinedGrades = students.map(student => {
    return generateStudentGrade(stuScores[student].scores);
  });

  let numExams = stuScores['student1'].scores.exams.length; // should be 4
  let examResults = [];
  for (let i = 0; i < numExams; i++) { // for each exam
    // collect exam results for each student in an examResult arr
    let examResult = [];
    students.forEach(student => {
      examResult.push(stuScores[student].scores.exams[i]);
    });

    // reduce the exam scores to produce an exam average
    let examAvg = students.reduce((accum, student) => {
      return accum + stuScores[student].scores.exams[i];
    }, 0) / students.length;

    // determine the exam min/max values
    let examMin = Math.min(...examResult);
    let examMax = Math.max(...examResult);

    // push the exam data to the examResults arr
    examResults.push({ average: examAvg, minimum: examMin, maximum: examMax });
  }

  return ({ studentGrades: combinedGrades, exams: examResults });
}

function minmaxExamResult(words) {
  return words.reduce(function (result, currentWord) {
    return currentWord.length >= result.length ? currentWord : result;
  });
}

// Generate a combined percent and letter grade for a student
function generateStudentGrade(studentScore) {
  // console.log(studentScore);
  // Compute the student's average exam score: (90 + 80 + 95 + 71) / 4 = 84
  let examScore = studentScore.exams.reduce((accum, elem) => accum + elem, 0) / studentScore.exams.length;
  // Compute the student's total exercise score: 20 + 15 + 40 = 75
  let exerciseScore = studentScore.exercises.reduce((accum, elem) => accum + elem, 0);
  // Apply weights to determine the final percent grade: 84 * .65 + 75 * .35 = 80.85
  let percentGrade = Math.round(examScore * 0.65 + exerciseScore * 0.35);
  return combinedGrades(percentGrade);
}

// Combine the percent grade and letter grade: "81 (C)"
function combinedGrades(num) {
  return `${num} (${generateLetterGrade(num)})`;
}

// Percent Grade   Letter Equivalent
// 93 - 100  A
// 85 - 92   B
// 77 - 84   C
// 69 - 76   D
// 60 - 68   E
// 0  - 59   F

// Lookup the letter grade in the table above: C
function generateLetterGrade(num) {
  if (num <= 100 && num > 92) return 'A';
  if (num > 84) return 'B';
  if (num > 76) return 'C';
  if (num > 68) return 'D';
  if (num > 59) return 'E';
  return 'F';
}

console.log(generateClassRecordSummary(studentScores));
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }
