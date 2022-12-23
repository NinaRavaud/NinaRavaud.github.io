let sidenav = document.getElementById("nav-burger");
let openBtn = document.getElementById("bouton-ouvert");
let closeBtn = document.getElementById("bouton-ferme");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

// const burgerLine = document.getElementsByClassName("button-line");
// console.log(burgerLine[0])

// burgerLine[0].style.backgroundColor = 'white';

// for(var k = 0, len_k = 3; k < len_k; k++) {
//   burgerLine[k].addEventListener('mouseover', function handleMouseOver() {
//     for(var i = 0, len = 3; i < len; i++) {
//       burgerLine[i].style.backgroundColor = 'white';
//     }
//   });

//   burgerLine[k].addEventListener('mouseout', function handleMouseOut() {
//     for(var i = 0, len = 3; i < len; i++) {
//       burgerLine[i].style.backgroundColor = 'gray';
//     }
//   });
// }


/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}
