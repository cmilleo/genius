const red = { color: "red", audio: new Audio("./src/audio/audio-1.mp3") },
  blue = { color: "blue", audio: new Audio("./src/audio/audio-2.mp3") },
  yellow = { color: "yellow", audio: new Audio("./src/audio/audio-3.mp3") },
  green = { color: "green", audio: new Audio("./src/audio/audio-4.mp3") };

function initGame(namePlayer) {
  const body = document.body;

  const section = document.createElement("section");
  section.id = "caixa";
  body.appendChild(section);
  const colors = document.createElement("div");
  colors.id = "colors";
  const divGreen = document.createElement("div");
  divGreen.className = "green";

  const divRed = document.createElement("div");
  divRed.className = "red";

  const divYellow = document.createElement("div");
  divYellow.className = "yellow";

  const divBlue = document.createElement("div");
  divBlue.className = "blue";

  const console = document.createElement("div");
  console.className = "console";
  const nameGame = document.createElement("h1");
  nameGame.innerText = "Rocket Genius";
  const namePlayerText = document.createElement("h2");
  namePlayerText.innerText = `${namePlayer}`;
  const level = document.createElement("h3");
  level.innerText = "Clique nas cores conforme sequência na tela";
  level.id = "levelH3";
  const pcMessages = document.createElement("h3");
  pcMessages.id = "pcMessages";
  const buttonReset = document.createElement("button");
  buttonReset.id = "buttonReset";
  buttonReset.innerText = "Iniciar";
  const imagem = document.createElement("img");
  imagem.className = "nave";
  imagem.src = "./src/img/bg-2.png";
  console.append(nameGame, namePlayerText, level, pcMessages, buttonReset);
  colors.append(console, divGreen, divRed, divBlue, divYellow, imagem);
  section.appendChild(colors);

  buttonReset.addEventListener("click", () => {
    nextLevel();
  });
}

let pc = [green];
const maxPoints = [];
let player = [];
let level = 1;
let dificulty = 900;
function generateRandomColor() {
  let random = Math.floor(Math.random() * 4) + 1;
  switch (random) {
    case 1:
      return red;
    case 2:
      return blue;
    case 3:
      return yellow;
    case 4:
      return green;
  }
}

function changeDificulty() {
  if (level >= 5 && level < 10) dificulty = 800;
  if (level >= 10) dificulty = 500;
}

function nextLevel() {
  startGame();
  const levelH3 = document.querySelector("#levelH3");
  levelH3.innerText = `Nível: ${level}`;
  maxPoints.push(level);
  level++;
}

function audio(color) {
  color.audio.play();
}

function startGame() {
  changeDificulty();
  const buttonReset = document.querySelector("#buttonReset");
  buttonReset.style.display = "none";
  const pcMessages = document.querySelector("#pcMessages");
  pcMessages.innerText = `Atenção!`;
  pcMessages.style.color = "#28a328";
  setTimeout(() => {
    pc.forEach((elemen, index, arr) => {
      setTimeout(() => {
        audio(arr[index]);
        toggleColor(arr[index]);
        if (index === arr.length - 2) {
          setTimeout(() => (pcMessages.innerText = `Sua vez!`), 400);
        }
      }, dificulty * index);
    });
    pc.push(generateRandomColor());
    playerTurn();
  }, 1000);
}

function toggleColor(color) {
  const toggle = document.querySelector(`.${color.color}`);
  toggle.classList.add("on");
  setTimeout(() => toggle.classList.remove("on"), 400);
}

function checkColor(player) {
  for (let i = 0; i < player.length; i++) {
    const pcMessages = document.querySelector("#pcMessages");
    if (player.length === pc.length - 1) {
      pcMessages.innerText = `Você acertou!`;
      const buttonReset = document.querySelector("#buttonReset");
      buttonReset.style.display = "";
      buttonReset.innerText = "Próximo";
      buttonReset.removeEventListener("click", nextLevel);
    }
    if (player[i] !== pc[i]) {
      pcMessages.style.color = "red";
      pcMessages.innerText = `Você perdeu!`;
      reset();
    }
  }
}

function reset() {
  pc = [green];
  level = 1;
  const levelH3 = document.querySelector("#levelH3");
  const pcMessages = document.querySelector("#pcMessages");
  levelH3.innerText = `Melhor pontuação: ${Math.max(...maxPoints)}`;
  const buttonReset = document.querySelector("#buttonReset");
  buttonReset.style.display = "";
  buttonReset.innerText = "Jogar Novamente";
}

function playerTurn() {
  player = [];
  const greenButton = document.querySelector(".green");
  const blueButton = document.querySelector(".blue");
  const yellowButton = document.querySelector(".yellow");
  const redButton = document.querySelector(".red");
  greenButton.addEventListener("click", greenSelected);
  blueButton.addEventListener("click", blueSelected);
  yellowButton.addEventListener("click", yellowSelected);
  redButton.addEventListener("click", redSelected);
}

function greenSelected() {
  audio(green);
  toggleColor(green);
  player.push(green);
  checkColor(player);
}
function blueSelected() {
  audio(blue);
  toggleColor(blue);
  player.push(blue);
  checkColor(player);
}
function yellowSelected() {
  audio(yellow);
  toggleColor(yellow);
  player.push(yellow);
  checkColor(player);
}
function redSelected() {
  audio(red);
  toggleColor(red);
  player.push(red);
  checkColor(player);
}
