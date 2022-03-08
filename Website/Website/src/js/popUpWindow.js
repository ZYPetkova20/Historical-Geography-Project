let feedback = document.getElementById('feedback-popUp');
let popUpWindow = document.querySelector('.popUp-wrapper');
let popUpbackground = document.querySelector('.popUp-background');
let close = document.getElementById('close-popUp');

feedback.addEventListener("click", function() {
    popUpWindow.classList.add('visiable');
    popUpWindow.classList.remove('notVisiable');
    popUpbackground.classList.add('backgroundAppear');
});
close.addEventListener("click", function() {
    popUpWindow.classList.add('notVisiable');
    popUpWindow.classList.remove('visiable');
    popUpbackground.classList.remove('backgroundAppear');
});