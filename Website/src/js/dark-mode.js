let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;

var element = document.body;
var button = document.getElementById('dark-mode-button');

//images than will be change depending on the mode
let logoImage = document.getElementById('logoImage');
let indexMainBackground = document.getElementById('index-main');
let scrollDownIcon = document.getElementById('scroll-down');
let footerBackground = document.querySelector('footer');


//by default to be dark or white mode
if(dark){
    element.classList.add("dark-mode");
    element.classList.remove("light-mode");
    logoImage.src = "dist/images/newtLogoInWhite.png";
    indexMainBackground.style.backgroundImage = "url(dist/images/sectionBackgroundWhite.png)";
    footerBackground.style.backgroundImage = "url(dist/images/footerBackgroundDarkMode.png)";
    button.checked = true;
}
else{
    element.classList.add("light-mode");
    element.classList.remove("dark-mode");
    logoImage.src = "dist/images/newtLogo.png";
    indexMainBackground.style.backgroundImage = "url(dist/images/sectionBackground.png)";
    footerBackground.style.backgroundImage = "url(dist/images/footerBackground.png)";
    button.checked = false;
}

//to change the white or te dark mode
function darkMode(){
    if(button.checked == true){
        element.classList.add("dark-mode");
        element.classList.remove("light-mode");
        logoImage.src = "dist/images/newtLogoInWhite.png";
        indexMainBackground.style.backgroundImage = "url(dist/images/sectionBackgroundWhite.png)";
        footerBackground.style.backgroundImage = "url(dist/images/footerBackgroundDarkMode.png)";
    }
    else{
        element.classList.add("light-mode");
        element.classList.remove("dark-mode");
        logoImage.src = "dist/images/newtLogo.png";
        indexMainBackground.style.backgroundImage = "url(dist/images/sectionBackground.png)";
        footerBackground.style.backgroundImage = "url(dist/images/footerBackground.png)";
    }
}
