 function changeImage() {

    //2nd image
    if (document.getElementById("imgToChange").src == "https://66.media.tumblr.com/6c57a17efb5ce610e572ccffa20a2116/tumblr_ocaba5cInB1uzg32xo1_540.png") 
    {
        //1st image
        document.getElementById("imgToChange").src = "https://66.media.tumblr.com/9956ddecd50d5070e77668453a2031ac/tumblr_ocaba5cInB1uzg32xo2_540.png";
        document.body.style.background = '#fbf9f9';
        document.body.style.color = "black";
    }
    else 
    {
        //2nd image
        document.getElementById("imgToChange").src = "https://66.media.tumblr.com/6c57a17efb5ce610e572ccffa20a2116/tumblr_ocaba5cInB1uzg32xo1_540.png";
        document.body.style.background = '#6fc38e'; //dark color
        document.body.style.color = "white";
    }

}

 $(document).ready(function(){
      // Add smooth scrolling to all links
      $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
       
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });
    });
