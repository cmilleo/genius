initGame(namePlayer);

function initGame(namePlayer){
    const main = document.createElement('main');
    main.innerHTML = 
        `
            <div class="container">
                <div class="bol">
                <button id="play">Play</button></div>
                <div class="green"></div>
                <div class="red"></div>
                <div class="yellow"></div>
                <div class="blue"></div>
            </div>
            
        `
    main.id = 'mainGame';
    body.appendChild(main);
    /* let player = new Player(namePlayer);
    let computer = new Computer();
    let game = new Game(player, computer);
    game.startGame(); */
}
const blue = document.querySelector('.blue');
const container = document.querySelector('.container');
//setInterval(()=>{container = document.querySelector('.container')}, 1000)
//setInterval(()=>{blue = document.querySelector('.blue')}, 1000)


function onOffClass(color){
    color.c
    console.log(color)
    blue.classList.toggle('on');
    audio(String(blue))//color.className))
    
}
/* function reciveNumberColor(number){
    switch(number){
        case 1:
            return onOffClass(blue);
        case 2:
            return onOffClass(blue);
        case 3:
            return onOffClass(blue);
        case 4:
            return onOffClass(blue);
    }
} */
function audio(color) {
    let red = {color: "red" , audio: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3")};
    let blue = {color: "blue on", audio: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3")};
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

container.addEventListener('click', (event) => {
    const color = event.target.className
    onOffClass(color);
    setTimeout(()=> onOffClass(color), 600);
});
/* const turn = []

function generateRandom(){
    let num =  Math.floor(Math.random() * (4) + 1);
    reciveNumberColor(num)
}

const player = document.getElementById('play')
player.addEventListener('click', generateRandom) */


