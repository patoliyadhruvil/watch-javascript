let second = 0;
let minute = 0;
let hour = 0;
let timerInterval;

let time = () =>{

    document.querySelector('.timer').innerHTML = `<h2>${hour}: ${minute}: ${second}</h2>`;
    second++;
    if(second == 60){
        second = 0;
        minute++;
    }
    if(minute == 60){
        minute = 0;
        hour++;
    }
}


let timer;

function Start(){
    timer = setInterval(time, 100);    
}
function Stop(){
    clearInterval(timer);
}
function Restart(){
    second = 0;
       hour = 0;
      minute = 0;
      clearInterval(timer);
      time();   
}