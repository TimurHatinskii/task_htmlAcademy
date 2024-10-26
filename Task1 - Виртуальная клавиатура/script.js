let clear = document.querySelector('.clear');
let display = document.querySelector('.display');
let keyButtons = document.querySelectorAll('.key');

clear.onclick = function (evt) {
  evt.preventDefault();
  display.textContent = '';
}

for (let keyButton of keyButtons) {
  keyButton.onclick = function () {
 display.textContent+=keyButton.textContent;
};
}