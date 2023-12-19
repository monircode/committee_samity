//active navbar

// let nav = document.querySelector('.navigation_wrap');
// window.onscroll = function (){
//     if(document.documentElement.scrollTop > 20){
//         nav.classList.add('scroll-on');
//     }else{
//         nav.classList.remove('scroll-on');
//     }
// }

// Set the date we're counting down to
var countDownDate = new Date("may 5, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


//back-to-top
const toTop = document.querySelector('.to-top');
window.addEventListener('scroll',() => {
    if (window.pageYOffset > 100){
        toTop.classList.add ('active');
    }
    else {
        toTop.classList.remove ('active')
    }
})

let table = $('#example').DataTable();
          for (let i=5 ; i<9 ; i++) {
        table.column(i).visible(false, false);
        }
        table.columns.adjust().draw(false);

