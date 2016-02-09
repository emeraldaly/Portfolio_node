var counter = 0;

function countup() {
  counter = counter + 1;
}


function countdown() {
  setTimeout(function countandgive() { 
      alert("You clicked " +counter+ " Comedians");
     
     }, 20000);
}
