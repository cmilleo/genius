const blue = document.querySelector('.blue');
const container = document.querySelector('.container');
function onOffClass(color){
    color.classList.toggle('on');
    audio(String(color.className))
    console.log(color.className)
}
function reciveNumberColor(number){
    switch(number){
        case 1:
            return onOffClass('green');
        case 2:
            return 'green';
        case 3:
            return 'blue';
        case 4:
            return onOffClass(blue);
    }
}
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
    let color = event.target.className
    console.log(color)
    onOffClass(color);
    setTimeout(onOffClass, 600);
});
const turn = []

function generateRandom(){
    let num =  Math.floor(Math.random() * (4) + 1);
    reciveNumberColor(num)
}

const player = document.getElementById('play')
player.addEventListener('click', generateRandom)


