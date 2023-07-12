const message = document.querySelector(".message");
const coinArray = ["Head", "Tail"];
let score = [0, 0];
const buttons = document.querySelectorAll("button");
for (let i = 0; i < 2; i++) {
  console.log(buttons[i]);
  buttons[i].addEventListener("click", change);
  buttons[i].addEventListener("click", function () {
    setTimeout(() => {
      myfunc(this);
    }, 4000);
  });
  buttons[i].addEventListener("click", function () {
    setTimeout(() => {
      changeback();
    }, 3500);
  });
}

function myfunc(e) {
  let playerchoice = e.innerText;
  let computer = Math.floor(Math.random() * 2);
  let computerchoice = coinArray[computer];
  let output;
  if (playerchoice === computerchoice) {
    output = " You Win";
    score[0]++;
    winsound();
  } else {
    output = "  Mr Tomato Win";
    score[1]++;
    losesound();
  }

  message.innerHTML = "Computer Selected : " + computerchoice + "<br/>";
  var span = document.createElement("span");
  span.classList.add("winlose");
  span.innerText = output;
  message.appendChild(span);

  if (output === " You Win") {
    span.style.color = "#7ffc7f";
    span.style.fontSize = "2.5rem";
    span.style.fontWeight = "600";
  } else {
    span.style.color = "#fff200";
    span.style.fontSize = "2.5rem";
    span.style.fontWeight = "600";
  }
  message.innerHTML +=
    "<br/>" + "player : " + score[0] + "  Mr Tomato Win : " + score[1];
  console.log(span);
}

function change() {
  document.body.style.backgroundImage = "url('img/giphy.gif')";
}

function changeback() {
  document.body.style.backgroundImage = "url('img/Static.gif')";
}

function winsound() {
  // ایجاد المان صوتی
  const audio = new Audio("img/win.wav");

  // پخش صدا
  audio.play();
}
function losesound() {
  // ایجاد المان صوتی
  const audio = new Audio("img/lose.wav");

  // پخش صدا
  audio.play();
}
