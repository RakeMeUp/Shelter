
window.onscroll = function() {scrollFunction()};

      
      function scrollFunction() {
        if (document.documentElement.scrollTop > 0) {
            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

                document.getElementById("header").style.fontSize = "0.7em";
                document.getElementById("TheHeader").style.paddingBottom = "0";
                document.getElementById("TheHeader").style.zIndex = 1;}
              else {
                document.getElementById("header").style.fontSize = "0.5em";
                document.getElementById("TheHeader").style.paddingBottom = "0";
                document.getElementById("TheHeader").style.zIndex = 1;
              }
            }
        else {
            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
          
              document.getElementById("header").style.fontSize = "1em";
              document.getElementById("TheHeader").style.paddingBottom = "0.5em";
              document.getElementById("TheHeader").style.zIndex = 0;}
            else {
              document.getElementById("header").style.fontSize = "1em";
              document.getElementById("TheHeader").style.paddingBottom = "0.5em";
              document.getElementById("TheHeader").style.zIndex = 0;
            }
        }

        if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
          document.getElementById("topBtn").style.display = "block";
        } else {
          document.getElementById("topBtn").style.display = "none";
        }
      }


    
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}