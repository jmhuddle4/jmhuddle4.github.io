 // fade in page load
 $(document).ready(function(){$("body").hide().fadeIn(1000);});

 function changeImage() {
    //2nd image
    if (document.getElementById("imgToChange").src == "https://66.media.tumblr.com/6c57a17efb5ce610e572ccffa20a2116/tumblr_ocaba5cInB1uzg32xo1_540.png")
    {
        //1st image
        document.getElementById("imgToChange").src = "https://67.media.tumblr.com/2100b64831891821cbe543895e736484/tumblr_odvv47EYmj1uzg32xo1_1280.png";
        document.body.style.background = '#fbf9f9'; //light
        document.body.style.color = "#928d88"; //text
    }
    else 
    {
        //2nd image
        document.getElementById("imgToChange").src = "https://66.media.tumblr.com/6c57a17efb5ce610e572ccffa20a2116/tumblr_ocaba5cInB1uzg32xo1_540.png";
        document.body.style.background = '#6fc38e'; //dark color
        document.body.style.color = "white"; //text
    }
}

// gallery logic
var index = 0;
var images = ["img/portfolio_site_radiotopia_1.png",
               "img/portfolio_site_radiotopia_2.png",
               "img/portfolio_site_radiotopia_3.png",
               "img/portfolio_site_radiotopia_4.png",
               "img/portfolio_site_radiotopia_5.png"];

function slideImageRight() {
    if(index != images.length - 1) {
        document.getElementById("gallery1").src = images[index + 1]
        index++;
    }
}

function slideImageLeft() {
    if(index != 0) {
        document.getElementById("gallery1").src = images[index - 1]
        index--;
    }
}

// Add smooth scrolling to all links
$(document).ready(function(){
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

// scroll to top on up arrow click
$(document).ready(function(){
    $('#floating_image').fadeOut();
    $(document).scroll(function() {
      var y = $(this).scrollTop();
      if (y > 800) {
        $('#floating_image').fadeIn();
        $('.description').fadeOut();
        $('.description-title').fadeOut();
      } else {
        $('#floating_image').fadeOut();
        $('.description').fadeIn();
        $('.description-title').fadeIn();
      }
    });
});
