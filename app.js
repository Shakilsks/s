let light = document.querySelector('.light');
let on = document.querySelector('.on');
let off = document.querySelector('.off');

on.addEventListener('click', function(){
    light.src =`./img/pic.02.gif`
})
off.addEventListener('click', function(){
    light.src =`./img/pic.01.gif`
})