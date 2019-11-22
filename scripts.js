"use sctrict";

$ballElem = $(".js-ball"); //получаем мячик
$fieldWidth = 281; //ширина поля
$ballTravelDist = 445; //дистацния до противоположной стороны
$goalStartPoint = 115; //начало ворот
$goalEndPoint = 145; //конец ворот
$startBallPos = 17; //начальное положение мячи
$currentBallPos = $startBallPos; //настоящее положение мяча

function getRandomYposition() {
  //создаем функцию получения случайного числа для позиции по Y
  return Math.floor(Math.random() * $fieldWidth) + 1;
}

function ballMovement($currentBallPos, distance) {
  //функция перемещения мяча
  $ballElem.toggleClass("rotate360");
  $ballElem.animate(
    {
      left: ($currentBallPos = $currentBallPos + distance),
      top: ($RandomYposition = getRandomYposition())
    },
    {
      duration: 1000,
      complete: function() {
        if (
          $RandomYposition >= $goalStartPoint &&
          $RandomYposition <= $goalEndPoint
        ) {
          console.log("goal!");
        }
      }
    }
  );
  return $currentBallPos;
}

$ballElem.on("click", function() {
  //по клику проверяем положение меча и передаем значение с + и -
  if ($currentBallPos <= $startBallPos) {
    $currentBallPos = ballMovement($currentBallPos, $ballTravelDist);
  } else {
    $currentBallPos = ballMovement($currentBallPos, -$ballTravelDist);
  }
});
