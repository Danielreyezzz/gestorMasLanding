//Animación de reveal
function reveal() {
    let reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      //Con getBoundingClientRect recogemos el tamaño del elemento y su posición relativa respecto a la ventana
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 95;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);
  reveal();


//Navbar reactivo a la location
const activePage = window.location;
const navLinks = document.querySelectorAll('.nav-link').
forEach(link => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add('active');
  }
})
