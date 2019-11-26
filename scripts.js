'use sctrict';

const ballElem = $('.js-ball'); //получаем мячик
const FIELD_Y_START_COORD = 0; // начало поля по Y
const FIELD_Y_END_COORD = 281; // конец поля по Y
const FIELD_X_START_COORD = 17; //начало поля по X
const FIELD_X_END_COORD = 445; //конец поля по X
const GOAL_Y_START_COORD = 115; //начало ворот по Y оси
const GOAL_Y_END_COORD = 145; //конец ворот по Y оси
const ANIMATION_DURATION = 1000; //скорость анимации
let currentBallPos = FIELD_X_START_COORD; //настоящее положение мяча

function getRandomNumber(startRange, endRange) {
  return Math.floor(Math.random() * (endRange - startRange) + startRange);
}

function coreGame(currentBallPos, distance) {
  //функция перемещения мяча
  let randomYposition;
  ballElem.toggleClass('rotate360');
  ballElem.animate(
    {
      left: (currentBallPos += distance),
      top: (randomYposition = getRandomNumber(
        FIELD_Y_START_COORD,
        FIELD_Y_END_COORD
      ))
    },
    {
      duration: ANIMATION_DURATION,
      complete: function() {
        if (
          randomYposition >= GOAL_Y_START_COORD &&
          randomYposition <= GOAL_Y_END_COORD
        ) {
          console.log('goal!');
        }
      }
    }
  );
  return currentBallPos;
}

ballElem.on('click', function() {
  //по клику проверяем положение меча и передаем значение с + и -
  if (currentBallPos <= FIELD_X_START_COORD) {
    currentBallPos = coreGame(currentBallPos, FIELD_X_END_COORD);
  } else {
    currentBallPos = coreGame(currentBallPos, -FIELD_X_END_COORD);
  }
});
