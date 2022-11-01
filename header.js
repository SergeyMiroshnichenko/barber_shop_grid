const icon = document.querySelector('.wrapper_icon');
const nav =document.querySelector(".nav")
$(function() {
    
    $('#nav-icon2').click(function(){
        $(this).toggleClass('open');
        nav.classList.toggle("mobile");
    });

});