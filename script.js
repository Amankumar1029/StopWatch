let timer=document.querySelector('.container');
let stopBtn=document.getElementById('stopbtn');
let startBtn=document.getElementById('startbtn');
let resetBtn=document.getElementById('resetbtn');

let msec=0;
let secs=0;
let mins=0;
let timerId=null;

startBtn.addEventListener('click',function(){
    if(timerId!==null){
        clearInterval(timerId);
    }
    timerId=setInterval(startTimer,10);
});

stopBtn.addEventListener('click',function(){
    clearInterval(timerId);
});

resetBtn.addEventListener('click',function(){
    clearInterval(timerId);
    timer.innerHTML=`00 : 00 : 00`;
    msec=secs=mins=0;
});

function startTimer(){
    msec++;
    if(msec==100){
        msec=0;
        secs++;
        if(secs==60){
            secs=0;
            mins++;
        }
    }

    let msecstring=msec<10 ? `0${msec}` : msec;
    let secsstring=secs<10 ? `0${secs}` : secs;
    let minsstring=mins<10 ? `0${mins}` : mins;
    timer.innerHTML=`${minsstring} : ${secsstring} : ${msecstring}`;
}

