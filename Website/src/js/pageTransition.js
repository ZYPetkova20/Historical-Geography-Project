let PGActive = localStorage.getItem('PGActive');
let a = document.getElementById("to-america");
window.onload = () => {
    const tranitionElement = document.querySelectorAll('.transition');
    const anchors = document.querySelectorAll('.page-transition');
    if(PGActive == 'active'){
        tranitionElement.forEach(tranitionElement=>{
            tranitionElement.classList.add('notActive');
        });  

        setTimeout(() => {
            tranitionElement.forEach(tranitionElement=>{
                tranitionElement.classList.remove('notActive'); 
            });  
    
            localStorage.setItem("PGActive", 'notActive');
        },1500);
      
    }
    for(let i = 0; i < anchors.length; i++){
        const anchor = anchors[i];
        anchor.addEventListener('click', e =>{
            e.preventDefault();
            tranitionElement.forEach(tranitionElement=>{
                tranitionElement.classList.add('active');
            });
            localStorage.setItem("PGActive", 'active');
            if(document.body.classList.contains('main-page')){
                if(i == 0){
                    setTimeout(()=>{
                        window.location.href = "http://127.0.0.1:5500/dist/pages/america.html";
                    },1500);
                }
                else if(i == 1){
                    setTimeout(()=>{
                        window.location.href = "http://127.0.0.1:5500/dist/pages/routeToIndia.html";
                    },1500);
                }
                else if(i == 2){
                    setTimeout(()=>{
                        window.location.href = "http://127.0.0.1:5500/dist/pages/circumnavigation.html";
                    },1500);
                }
                else if(i == 3){
                    setTimeout(()=>{
                        window.location.href = "http://127.0.0.1:5500/dist/pages/northPole.html";
                    },1500);
                }
                else if(i == 4){
                    setTimeout(()=>{
                        window.location.href = "http://127.0.0.1:5500/dist/pages/southPole.html";
                    },1500);
                }
                else if(i == 5){
                    setTimeout(()=>{
                        window.location.href = "http://127.0.0.1:5500/dist/pages/america.html";
                    },1500);
                }
                else if(i == 6){
                    setTimeout(()=>{
                        window.location.href = "http://127.0.0.1:5500/dist/pages/routeToIndia.html";
                    },1500);
                }
                else if(i == 7){
                    setTimeout(()=>{
                        window.location.href = "http://127.0.0.1:5500/dist/pages/circumnavigation.html";
                    },1500);
                }
                else if(i == 8){
                    setTimeout(()=>{
                        window.location.href = "http://127.0.0.1:5500/dist/pages/northPole.html";
                    },1500);
                }
                else if(i == 9){
                    setTimeout(()=>{
                        window.location.href = "http://127.0.0.1:5500/dist/pages/southPole.html";
                    },1500);
                }
                else if(i == 10){
                    setTimeout(()=>{
                        window.location.href = "http://127.0.0.1:5500/dist/pages/aboutUs.html";
                    },1500);
                }
                
            }
            else{
                 if(i == 0){
                    setTimeout(()=>{
                        window.location.href = "http://127.0.0.1:5500/../../index.html";
                    },1500);
                }  
                else if(i ==1){
                    setTimeout(()=>{
                        window.location.href = "http://127.0.0.1:5500/dist/pages/aboutUs.html";
                    },1500);
                }  
            }
        });
    }
}