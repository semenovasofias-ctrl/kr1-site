function verify() {
  let seat = parseInt(elementSeat.value);

  let level, place;
  if (seat % 2 === 1) {
    level = 'Нижнее';
  } else {
    level = 'Верхнее';
  }

  if (seat <= 36) {
    place = 'В купе';
  } else {
    place = 'Боковое';
  }

  if (seat >= 1 && seat <= 54) {
    result = 'Место ' + seat + ': ' + level + ', ' + place;
    check = true;
  } else {
    result = 'Такого места нет. Введите число от 1 до 54';
    check = false;
  }
  document.getElementById('result').value = result;
}
function send() {
  if (chek) {
    document.getElementById('UserEnter').submit();
  } else {
    alert('Повторите ввод');
  }
}
let result;
let check;
const elementSeat = document.getElementById('seat');
const elementVerify = document.getElementById('verify');
elementVerify.addEventListener('click', verify);
const elementSend = document.getElementById('send');
elementSend.addEventListener('click', send);
