(function(){



let timer = document.getElementById('timer');
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');


let startTime;
let timerId;
let timeToadd = 0;
let elapsedTime = 0;




function updateTimeText(){
  let m = Math.floor(elapsedTime/60000);
  let s = Math.floor(elapsedTime % 60000 / 1000);  
  let ms = elapsedTime % 1000;
  
  m = ('0' + m).slice(-2);
  s = ('0' + s).slice(-2);
  ms = ('00' + ms).slice(-3);
  
  timer.textContent = m + ':' + s + ':' + ms;
}

function countUp(){
  timerId = setTimeout(function(){
    elapsedTime =　Date.now() - startTime + timeToadd;
    updateTimeText()
    countUp();
 
  },10);
  
  
}
start.addEventListener('click',fstart);
function fstart(){
  startTime = Date.now();
  countUp();
  
};

stop.addEventListener('click',fstop);
function fstop(){
  clearTimeout(timerId);  
  timeToadd += Date.now() - startTime;
};

reset.addEventListener('click',freset);
function freset(){
    elapsedTime = 0;
    timeToadd = 0;
    updateTimeText();
};

})();



