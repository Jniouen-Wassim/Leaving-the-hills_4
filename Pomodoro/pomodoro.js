////////////////////////////////( Initialisation )////////////////////////////////////////////////////////////////

//--------( 'let' for => 'click custom' & 'Minuteur' )---------//
const body = document.querySelector('body')

let start = document.getElementById('start');
let pause = document.getElementById('pause');
let reset = document.getElementById('reset');

//--------( 'let' for => Minuteur' )---------//
let wm = document.getElementById('workMinutes');
let ws = document.getElementById('workSeconds');

let bm = document.getElementById('breakMinutes');
let bs = document.getElementById('breakSeconds');

let startTimer;

///////////////////////////////( click custom )///////////////////////////////////////////////////

start.addEventListener('click', function () {
    
    body.style.filter = "none";
    start.style.filter= "none";
    reset.style.filter = "brightness(180%)";
    pause.style.filter = "brightness(180%)";

})

pause.addEventListener('click', function () {
    
    body.style.filter = "none";
    pause.style.filter = "none";
    reset.style.filter = "brightness(180%)";
    start.style.filter = "brightness(180%)";

})

reset.addEventListener('click', function () {
    
   // body.style.filter = "grayscale(60%)";
    reset.style.filter = "none";
    start.style.filter = "brightness(180%)";
    pause.style.filter = "brightness(180%)";

})

////////////////////////////( Minuteur )/////////////////////////////////////////////



start.addEventListener('click', function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000)
    } else {
        alert("Timer is already running");
    }
})

reset.addEventListener('click', function(){
    wm.innerText = 25;
    ws.innerText = "00";

    bm.innerText = 5;
    bs.innerText = "00";

    document.getElementById('counter').innerText = 0;
    pauseInterval()
    startTimer = undefined;
})

pause.addEventListener('click', function(){
    pauseInterval()
    startTimer = undefined;
})



function timer(){
    //work timer counter
    if(ws.innerText != 0){
        ws.innerText--;
    } else if(wm.innerText != 0 && ws.innerText == 0){
        ws.innerText = 59;
        wm.innerText--;
    }

    //pause timer counter
    if(wm.innerText == 0 && ws.innerText == 0){
        if(bs.innerText != 0){
            bs.innerText--;
        } else if(bm.innerText != 0 && bs.innerText == 0){
            bs.innerText = 59;
            bm.innerText--;
        }
    }


    if(wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0){
        wm.innerText = 25;
        ws.innerText = "00";

        bm.innerText = 5;
        bs.innerText = "00";

        document.getElementById('counter').innerText++;
    }
}
function pauseInterval(){
    clearInterval(startTimer);
}