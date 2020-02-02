
window.onscroll = function() {scrollFunction()};

      
      function scrollFunction() {
        if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
          document.getElementById("topBtn").style.display = "block";
        } else {
          document.getElementById("topBtn").style.display = "none";
        }
      }


    
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}