// ***** GLOBALS *****

// Get the header
let header = document.querySelector('article');
// Get the offset position of the navbar
let sticky = header.offsetTop;

// get the curcor
const cursor = document.querySelector('.cursor');










// ***** HELPER FUNCTION ****

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// ** EVENT LISTENERS **

document.addEventListener('mousemove', (e) => {
  let leftPosition = e.pageX +3;
  let topPosition = e.pageY +3;
  cursor.style.left = leftPosition + 'px';
  cursor.style.top = topPosition + 'px';
}
)
window.onscroll = function () { myFunction() };