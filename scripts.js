'use sctrict';

const ballElem = $('.js-ball'); //получаем мячик
const FIELD_Y_START_POINT = 0; // начало поля по Y
const FIELD_Y_END_POINT = 281; // конец поля по Y
const GOAL_Y_START_POINT = 115; //начало ворот по Y оси
const GOAL_Y_END_POINT = 145; //конец ворот по Y оси
const BALL_X_START_POS = 17; //начальное положение мячи по X
const BALL_X_END_POS = 445; //дистацния до противоположной стороны по X
const ANIMATION_DURATION = 1000; //скорость анимации
let currentBallPos = BALL_X_START_POS; //настоящее положение мяча

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
        FIELD_Y_START_POINT,
        FIELD_Y_END_POINT
      ))
    },
    {
      duration: ANIMATION_DURATION,
      complete: function() {
        if (
          randomYposition >= GOAL_Y_START_POINT &&
          randomYposition <= GOAL_Y_END_POINT
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
  if (currentBallPos <= BALL_X_START_POS) {
    currentBallPos = coreGame(currentBallPos, BALL_X_END_POS);
  } else {
    currentBallPos = coreGame(currentBallPos, -BALL_X_END_POS);
  }
});
