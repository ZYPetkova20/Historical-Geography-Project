"use strict";var PGActive=localStorage.getItem("PGActive"),a=document.getElementById("to-america");window.onload=function(){var t=document.querySelectorAll(".transition"),o=document.querySelectorAll(".page-transition");"active"==PGActive&&(t.forEach((function(t){t.classList.add("notActive")})),setTimeout((function(){t.forEach((function(t){t.classList.remove("notActive")})),localStorage.setItem("PGActive","notActive")}),1500));for(var i=function(i){o[i].addEventListener("click",(function(o){o.preventDefault(),t.forEach((function(t){t.classList.add("active")})),localStorage.setItem("PGActive","active"),document.body.classList.contains("main-page")?0==i?setTimeout((function(){window.location.href="http://127.0.0.1:5500/dist/pages/america.html"}),1500):1==i?setTimeout((function(){window.location.href="http://127.0.0.1:5500/dist/pages/routeToIndia.html"}),1500):2==i?setTimeout((function(){window.location.href="http://127.0.0.1:5500/dist/pages/circumnavigation.html"}),1500):3==i?setTimeout((function(){window.location.href="http://127.0.0.1:5500/dist/pages/northPole.html"}),1500):4==i?setTimeout((function(){window.location.href="http://127.0.0.1:5500/dist/pages/southPole.html"}),1500):5==i?setTimeout((function(){window.location.href="http://127.0.0.1:5500/dist/pages/america.html"}),1500):6==i?setTimeout((function(){window.location.href="http://127.0.0.1:5500/dist/pages/routeToIndia.html"}),1500):7==i?setTimeout((function(){window.location.href="http://127.0.0.1:5500/dist/pages/circumnavigation.html"}),1500):8==i?setTimeout((function(){window.location.href="http://127.0.0.1:5500/dist/pages/northPole.html"}),1500):9==i?setTimeout((function(){window.location.href="http://127.0.0.1:5500/dist/pages/southPole.html"}),1500):10==i&&setTimeout((function(){window.location.href="http://127.0.0.1:5500/dist/pages/aboutUs.html"}),1500):0==i?setTimeout((function(){window.location.href="http://127.0.0.1:5500/../../index.html"}),1500):1==i&&setTimeout((function(){window.location.href="http://127.0.0.1:5500/dist/pages/aboutUs.html"}),1500)}))},e=0;e<o.length;e++)i(e)};