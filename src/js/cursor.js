var cursor = document.querySelector('.cursor');

var moveCursor = (e)=> {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
   
  cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
} 
//set the custom cursor

document.querySelectorAll('a').forEach(link => {
  link.addEventListener("mouseleave", ()=> {
    cursor.classList.remove('hover-links');
  });
  link.addEventListener("mouseover", ()=> {
    cursor.classList.add('hover-links');
  });
})
//animation when you hover links

window.addEventListener('mousemove', moveCursor)