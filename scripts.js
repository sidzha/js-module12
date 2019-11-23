'use sctrict';

const ballElem = $('.js-ball'); //получаем мячик
const FIELD_WIDTH = 281; //ширина поля
const BALL_TRAVEL_DIST = 445; //дистацния до противоположной стороны
const GOAL_START_POINT = 115; //начало ворот
const GOAL_END_POINT = 145; //конец ворот
const START_BALL_POS = 17; //начальное положение мячи
const ANIMATION_SPEED = 1000; //скорость анимации
let currentBallPos = START_BALL_POS; //настоящее положение мяча

function getRandomYposition() {
  //создаем функцию получения случайного числа для позиции по Y
  return Math.floor(Math.random() * FIELD_WIDTH) + 1;
}

function coreGame(currentBallPos, distance) {
  //функция перемещения мяча
  let randomYposition;
  ballElem.toggleClass('rotate360');
  ballElem.animate(
    {
      left: (currentBallPos += distance),
      top: (randomYposition = getRandomYposition())
    },
    {
      duration: ANIMATION_SPEED,
      complete: function() {
        if (
          randomYposition >= GOAL_START_POINT &&
          randomYposition <= GOAL_END_POINT
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
  if (currentBallPos <= START_BALL_POS) {
    currentBallPos = coreGame(currentBallPos, BALL_TRAVEL_DIST);
  } else {
    currentBallPos = coreGame(currentBallPos, -BALL_TRAVEL_DIST);
  }
});
