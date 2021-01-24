
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

var buttonCli = document.querySelector('.buttonCli');


buttonCli.onclick = function(){

    document.querySelector('.buttonCli').style.top = getRndInteger(0, 1201) + "px";
    document.querySelector('.buttonCli').style.left = getRndInteger(0, 1201) + "px";
   

}
