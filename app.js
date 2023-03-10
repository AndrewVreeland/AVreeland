// ***** GLOBALS *****

// Get the header
let header = document.querySelector('article');
// Get the offset position of the navbar
let sticky = header.offsetTop;

// get the curcor
const cursor = document.querySelector('.cursor');
const innerCursor = document.querySelector('.innerCursor');










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

window.addEventListener('mousemove', (e) => {
  let leftPosition = e.pageX+3 ;
  let topPosition = e.pageY+3 ;
  cursor.style.left = leftPosition + 'px';
  cursor.style.top = topPosition + 'px';
  cursor.setAttribute('data-fromTop', (cursor.offsetTop - scrollY))
})
window.addEventListener('scroll', () =>
{
  const fromTop = parseInt(cursor.getAttribute('data-fromTop'))
  // let topPosition = scrollY +'3';
  cursor.style.top = scrollY + fromTop + 'px';
  console.log(fromTop)
})
window.addEventListener('hover', ()=> {
  if(cursor.classList.contains('active')){
    cursor.classList.remove('hover')
    void cursor.offsetWidth;
    cursor.classList.add('hover')
  } else{
    cursor.classList.add('hover')
  };
})

window.onscroll = function () { myFunction() };