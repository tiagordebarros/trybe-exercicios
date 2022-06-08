const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const studentAverage = () => {
    return students.map((student, index) => {
    const studentInfo = {
        name: student,
        average: grades[index].reduce((acc, curr) => {
          return acc + curr / grades[index].length;
        }, 0).toFixed(1)
        }
        return studentInfo;
    });
};
console.log(studentAverage());
