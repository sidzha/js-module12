"use sctrict";

$ballElem = $(".ball");
//по моему в jQuery не обязательно объявлять переменные
let RandomYposition;

function getRandomYposition() {
  return Math.floor(Math.random() * 281) + 1;
}

$xBallPosition = Math.floor($(".ball").position().left);

$ballElem.on("click", function() {
  if ($xBallPosition <= 17) {
    ballMovement(445);
  } else {
    ballMovement(-445);
  }
});

function ballMovement(distance) {
  $ballElem.toggleClass("rotate360");
  $ballElem.animate(
    {
      left: ($xBallPosition = $xBallPosition + distance),
      top: (RandomYposition = getRandomYposition())
    },
    {
      duration: 1000,
      complete: function() {
        if (RandomYposition >= 115 && RandomYposition <= 145) {
          console.log("goal!");
        }
      }
    }
  );
}
