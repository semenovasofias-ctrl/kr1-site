change = document.getElementById('change');
change.addEventListener('click', change_all);
function change_all() {
  if (document.getElementsByTagName('div')[1].innerHTML === 'да Винчи') {
    document.getElementsByTagName('div')[0].innerHTML = 'Chancellerie royale';
    document.getElementsByTagName('div')[1].innerHTML = 'da Vinci';
    document.getElementsByTagName('div')[2].innerHTML = 'Leonardo';
    document.getElementsByTagName('div')[3].innerHTML = 'di ser Piero';
    document.getElementsByTagName('div')[4].innerHTML =
      'fame &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15.04.1452';
  } else {
    if (document.getElementsByTagName('div')[1].innerHTML === 'da Vinci') {
      document.getElementsByTagName('div')[0].innerHTML =
        'Королевская концелярия';
      document.getElementsByTagName('div')[1].innerHTML = 'да Винчи';
      document.getElementsByTagName('div')[2].innerHTML = 'Леонардо';
      document.getElementsByTagName('div')[3].innerHTML = 'ди сер Пьеро';
      document.getElementsByTagName('div')[4].innerHTML =
        'Муж &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15.04.1452';
    }
  }
}
