const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

function getInfo(obj, name) {
  const lessons = [];
  let students = 0;
  const objeto = Object.values(obj);
  for (index in objeto) {
    if (objeto[index].professor === name) {
      lessons.push(objeto[index].materia);
      students += objeto[index].numeroEstudantes;
    }
  }
  return {aulas: lessons, estudantes: students}
}
const createReport = (obj, name) => {
  const report = {};
  report.professor = name;
  Object.assign(report, getInfo(obj, name));
  return report;
}
console.log(createReport(allLessons, 'Maria Clara'));