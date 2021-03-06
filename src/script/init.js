const body = document.getElementsByTagName("body")[0];

function initPage() {
  const main = document.createElement("main");
  main.id = "mainInit";
  const backGround = document.createElement("img");
  backGround.src = "./src/img/bg-1.png";
  const container = document.createElement("div");
  container.classList.add("containerInit");
  const cardTop = document.createElement("div");
  cardTop.id = "cardTop";
  const cardTopNav = document.createElement("span");
  cardTopNav.classList.add("material-icons-sharp");
  cardTopNav.innerText = "rocket_launch";
  const cardTopTitle = document.createElement("h1");
  cardTopTitle.innerText = "Rocket Genius";
  const cardMain = document.createElement("div");
  cardMain.id = "cardMain";
  const cardMainUl = document.createElement("ul");
  const cardMainLi1 = document.createElement("li");
  const namePlayer = document.createElement("h2");
  namePlayer.innerText = "Nome do Jogador";
  const inputPlayer = document.createElement("input");
  inputPlayer.type = "text";
  inputPlayer.placeholder = "Digite seu nome";
  inputPlayer.id = "inputPlayer";
  const buttonPlay = document.createElement("button");
  buttonPlay.id = "buttonPlay";
  buttonPlay.innerText = "Launch";

  main.appendChild(container);
  container.appendChild(cardTop);
  cardTop.appendChild(cardTopNav);
  cardTop.appendChild(cardTopTitle);
  cardMain.appendChild(cardMainUl);
  cardMainUl.appendChild(cardMainLi1);
  cardMainLi1.appendChild(namePlayer);
  cardMainLi1.appendChild(inputPlayer);
  cardMainLi1.appendChild(buttonPlay);
  container.appendChild(cardMain);
  body.appendChild(main);
  body.appendChild(backGround);
}
initPage();
const inputPlayer = document.getElementById("inputPlayer");
const buttonPlay = document.getElementById("buttonPlay");
buttonPlay.addEventListener("click", () => {
  const init = document.getElementById("init");
  init.href = "./src/style/style.css";
  const main = document.getElementById("mainInit");
  const img = document.getElementsByTagName("img")[0];
  main.remove();
  img.remove();
  const namePlayer = inputPlayer.value;
  initGame(namePlayer);
});
