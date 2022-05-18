let mainbox= document.querySelector('#box');
let blackcircle=document.querySelector('#circle');

document.addEventListener('click',function(e){
    var x = e.pageX;
    var y = e.pageY;

    circle.style.left = x - mainbox.offsetLeft - 50 + 'px';
    circle.style.top = y - mainbox.offsetTop -50 + 'px';

})