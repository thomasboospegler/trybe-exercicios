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

const addKeyValue = (obj, key, value) => {
  obj[key] = value;
  console.log(obj);
}
addKeyValue(lesson1, 'turno', 'noite');

const listKeys = (obj) => {
  console.log(Object.keys(obj));
}
listKeys(lesson2);

const objLength = (obj) => {
  console.log(Object.keys(obj).length);
}
objLength(lesson3);

const listValues = (obj) => {
  console.log(Object.values(obj));
}
listValues(lesson3);

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

const totalEstudents = (obj) => {
  const estudents1 = obj.lesson1.numeroEstudantes;
  const estudents2 = obj.lesson2.numeroEstudantes;
  const estudents3 = obj.lesson3.numeroEstudantes;
  return estudents1 + estudents2 + estudents3;
}
console.log(totalEstudents(allLessons));

const positionValue = (obj, position) => {
  return Object.values(obj)[position];
}
console.log(positionValue(lesson1, 0));

const verifyPair = (obj, key, value) => {
  if (key in obj && Object.values(obj).indexOf(value) >= 0) {
    return true;
  } 
  return false;
}
console.log(verifyPair(lesson3, 'turno', 'noite'));