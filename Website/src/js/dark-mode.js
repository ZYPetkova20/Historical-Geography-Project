const darkModeToggle = document.getElementById('dark-mode-button');
const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
let colorMode = localStorage.getItem('colorMode');

//images than will be change depending on the mode
let logoImage = document.getElementById('logoImage');
let indexMainBackground = document.getElementById('index-main');
let scrollDownIcon = document.getElementById('scroll-down');
let logoImageAbotUsPage = document.getElementById('newt-logo-about-us');
let footerBackground = document.querySelector('footer');
let arrow = document.querySelectorAll('.arrow');
let globeIcon = document.getElementById('globe-icon');

const lightMode = () =>{
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    localStorage.setItem("colorMode", 'disable');
    darkModeToggle.checked = false;

    if(document.body.classList.contains('main-page')){
        logoImage.src = "Website/dist/images/newtLogo.png";
        indexMainBackground.style.backgroundImage = "url(Website/dist/images/sectionBackground.png)";
        footerBackground.style.backgroundImage = "url(Website/dist/images/footerBackground.png)";
        arrow.forEach(arrow=>{
            arrow.src="Website/dist/images/arrow.png";
        });
    }
    else if(document.body.classList.contains('about-us-page')){
        footerBackground.style.backgroundImage = "url(../images/footerBackground.png)";
        logoImageAbotUsPage.src = "../images/newtLogoInAboutUsPage.png";
    }
    else if(document.body.classList.contains('secondary-page')){
        globeIcon.src = "../images/globeIcon.png"
    }
}

const darkMode = () =>{
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
    localStorage.setItem("colorMode", 'enabled');
    darkModeToggle.checked = true;

    if(document.body.classList.contains('main-page')){
        logoImage.src = "Website/dist/images/newtLogoInWhite.png";
        indexMainBackground.style.backgroundImage = "url(Website/dist/images/sectionBackgroundWhite.png)";
        footerBackground.style.backgroundImage = "url(Website/dist/images/footerBackgroundDarkModeIndexPage.png)";
        arrow.forEach(arrow=>{
            arrow.src="Website/dist/images/arrowDarkMode.png";
        });
    }
    else if(document.body.classList.contains('about-us-page')){
        footerBackground.style.backgroundImage = "url(../images/footerBackgroundDarkMode.png)";
        logoImageAbotUsPage.src = "../images/newtLogoInAboutUsPageWhite.png";
    }
    else if(document.body.classList.contains('secondary-page')){
        globeIcon.src = "../images/globeIconDarkMode.png";
    }
}

//if you have never set theme check your default theme and use it
if(colorMode !== "enabled" && colorMode !== "disable"){
    if(dark){
        darkMode();
    }
    else{
        lightMode();
    }
}

//if you have set theme before
if(colorMode === "enabled"){
    darkMode();
}

//change the theme
darkModeToggle.addEventListener('click', () => {
    colorMode = localStorage.getItem('colorMode');
    if(colorMode !== "enabled"){
        darkMode();
    }
    else{
        lightMode();
    }
});