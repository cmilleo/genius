const body = document.getElementsByTagName('body')[0];

function initPage(){

    const main = document.createElement('main');
    main.id = 'mainInit';
    const backGround = document.createElement('img');
    backGround.src = './img/bg-1.png';
    const container = document.createElement('div');
    container.classList.add('containerInit');
    const cardTop = document.createElement('div');
    cardTop.id = 'cardTop';
    const cardTopNav = document.createElement('span');
    cardTopNav.classList.add("material-icons-sharp");
    cardTopNav.innerText = 'rocket_launch'
    const cardTopTitle = document.createElement('h1');
    cardTopTitle.innerText = 'Rocket Genius';
    const cardMain = document.createElement('div');
    cardMain.id = 'cardMain';
    const cardMainUl = document.createElement('ul');
    const cardMainLi1 = document.createElement('li');
    const namePlayer = document.createElement('h2');
    namePlayer.innerText = 'Nome do Piloto';
    const inputPlayer = document.createElement('input');
    inputPlayer.type = 'text';
    inputPlayer.placeholder = 'Digite seu nome';
    const buttonPlay = document.createElement('button');
    buttonPlay.innerText = 'Launch';
    

    
    
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



function audio(color) {
    let red = {color: "red" , audio: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3")};
    let blue = {color: "blue", audio: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3")};
    let yellow = {color: "yellow", audio: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3")};
    let green = {color: "green", audio: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3")};
    if(color === red.color) {
      red.audio.play();
    }else if(color === blue.color) {
      blue.audio.play();
    }else if(color === green.color) {
      green.audio.play();
    }else if(color === yellow.color) {
      yellow.audio.play();
    }
  }