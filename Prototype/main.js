btnlist = document.getElementsByClassName('rate-btn');
submit = document.getElementById('submit');
let selected = 0
for (let i = 0; i < btnlist.length; i++) {
    btnlist[i].addEventListener('click', function () {
        for (let j = 0; j < btnlist.length; j++) {
            btnlist[j].style.backgroundColor = 'hsl(213, 19%, 18%)';
            btnlist[j].style.color = 'hsl(216, 12%, 54%)';
        }
        btnlist[i].style.backgroundColor = 'hsl(25, 97%, 53%)';
        btnlist[i].style.color = 'white';
        selected = i+1;
        console.log(selected);
    });
}
selectedPoints = document.getElementById('selected-points');
main = document.getElementById('rate-box');
thankYou = document.getElementById('rate-box2');
submit.addEventListener('click',function(){
	selectedPoints.innerHTML = 'You selected '+ selected +' out of 5';
	main.classList.add('hidden');
	thankYou.classList.remove('hidden');
});





$(".star-container").bind("webkitAnimationEnd mozAnimationEnd animationend", function(){
  $(this).removeClass("animated")  
})

$(".star-container").hover(function(){
  $(this).addClass("animated");        
})