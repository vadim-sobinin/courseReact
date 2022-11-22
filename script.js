'use strict';
const employers = [
  'АртеМ',
  'максим',
  'Владимир',
  'сергей',
  'НикиТа',
  'евГений',
  ' Дарья',
  ' ',
  'виктория ',
  'ЕкаТерина',
  '',
  ' Андрей ',
  'КИРИЛЛ',
];
const nameCourse = 'Базовый React';
const command = employers.filter((employer) => employer.trim() != '');

command.forEach((member, index, array) => {
  member = member.toLowerCase().trim();
  member = member[0].toUpperCase() + member.slice(1);
  array[index] = member;
});

const data = {
  cash: [3, 8, 3],
  react: ['JSX', 'components', 'props', 'state', 'hooks'],
  add: ['styled-components', 'firebase'],
};

const calcCash = (own = 0) => {
  return own.reduce((total, val) => total + val);
};

const lesson = calcCash(data.cash);

const makeBusiness = (director, allModule, gang, course, teacher = 'Максим') => {
  const sumTech = data.react.concat(data.add, 'и другие');
  console.log(
    `Стартуем новый курс: "${course}". Владелец: ${director}, преподаватель: ${teacher}. Всего уроков: ${allModule}.
Команда Академии: ${gang},`,
  );
  console.log('Первое что изучим будет ' + data.react[0] + '. Он очень похож на HTML!');
  console.log('Технологии которые мы изучим: ');
  console.log(sumTech.join(', '));
};

makeBusiness('Артем', lesson, command.join(', '), nameCourse);
