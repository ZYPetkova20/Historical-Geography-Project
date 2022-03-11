const darkModeToggle = document.getElementById('dark-mode-button');
const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
let colorMode = localStorage.getItem('colorMode');

//images than will be change depending on the mode
let logoImage = document.getElementById('logoImage');
let indexMainBackground = document.getElementById('index-main');
let scrollDownIcon = document.getElementById('scroll-down');
let logoImageAbotUsPage = document.getElementById('newt-logo-about-us');
let footerBackground = document.querySelector('footer');

const lightMode = () =>{
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    localStorage.setItem("colorMode", 'disable');
    darkModeToggle.checked = false;

    if(document.body.classList.contains('main-page')){
        logoImage.src = "dist/images/newtLogo.png";
        indexMainBackground.style.backgroundImage = "url(dist/images/sectionBackground.png)";
        footerBackground.style.backgroundImage = "url(dist/images/footerBackground.png)";
    }
    else if(document.body.classList.contains('about-us-page')){
        footerBackground.style.backgroundImage = "url(../images/footerBackground.png)";
        logoImageAbotUsPage.src = "../images/newtLogoInAboutUsPage.png";
    }
}

const darkMode = () =>{
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
    localStorage.setItem("colorMode", 'enabled');
    darkModeToggle.checked = true;

    if(document.body.classList.contains('main-page')){
        logoImage.src = "dist/images/newtLogoInWhite.png";
        indexMainBackground.style.backgroundImage = "url(dist/images/sectionBackgroundWhite.png)";
        footerBackground.style.backgroundImage = "url(dist/images/footerBackgroundDarkMode.png)";
    }
    else if(document.body.classList.contains('about-us-page')){
        footerBackground.style.backgroundImage = "url(../images/footerBackgroundDarkMode.png)";
        logoImageAbotUsPage.src = "../images/newtLogoInAboutUsPageWhite.png";
    }
}

if(colorMode !== "enabled" && colorMode !== "disable"){
    if(dark){
        darkMode();
    }
    else{
        lightMode();
    }
}

if(colorMode === "enabled"){
    darkMode();
}

darkModeToggle.addEventListener('click', () => {
    colorMode = localStorage.getItem('colorMode');
    if(colorMode !== "enabled"){
        darkMode();
    }
    else{
        lightMode();
    }
});