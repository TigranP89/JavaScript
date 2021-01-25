function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var buttonCli = document.querySelector('.buttonCli');





var i = 1;
var d = new Date;
buttonCli.onclick = function(){

  document.querySelector('.buttonCli').style.top = getRndInteger(0, 1201) + "px";
  document.querySelector('.buttonCli').style.left = getRndInteger(0, 1201) + "px";
  
  buttonCli.innerHTML = 'Click Me ' + i;
  i++;

  if(i == 12){
var d1 = new Date - d;
alert("Вам понадобилось " + d1/1000 + " секунд");

}
}
