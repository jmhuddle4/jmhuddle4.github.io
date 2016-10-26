// fade in page load
$(document).ready(function(){
    $("body").hide().fadeIn(1000);
    getNavbarLocation();
});

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

demoimages = document.getElementsByClassName("demo-img");
demoboxes = document.getElementsByClassName("demo-box");
demotexts = document.getElementsByClassName("text");

function changeImage() {
    //2nd image
    if (document.getElementById("imgToChange").src == "https://66.media.tumblr.com/6c57a17efb5ce610e572ccffa20a2116/tumblr_ocaba5cInB1uzg32xo1_540.png")
    {
        //1st image
        document.getElementById("imgToChange").src = "https://67.media.tumblr.com/2100b64831891821cbe543895e736484/tumblr_odvv47EYmj1uzg32xo1_1280.png";
        document.body.style.background = '#fbf9f9'; //light
        document.body.style.color = "#928d88"; //gray text
        document.getElementById("navbar").style.background = "#928d88";

        for (var i = 0; i < demoimages.length; i++) {
            demoimages[i].style.backgroundColor="#fbf9f9";
        }

        for (var i = 0; i < demoboxes.length; i++) {
            demoboxes[i].style.backgroundColor="#fbf9f9";
        }

        for (var i = 0; i < demotexts.length; i++) {
            demotexts[i].style.color="#928d88";
        }
    }
    else
    {
        //2nd image
        document.getElementById("imgToChange").src = "https://66.media.tumblr.com/6c57a17efb5ce610e572ccffa20a2116/tumblr_ocaba5cInB1uzg32xo1_540.png";
        document.body.style.background = '#6fc38e'; //dark color
        document.body.style.color = "white"; //text
        document.getElementById("navbar").style.background = "white";

        for (var i = 0; i < demoimages.length; i++) {
            demoimages[i].style.backgroundColor="white";
        }

        for (var i = 0; i < demoboxes.length; i++) {
            demoboxes[i].style.backgroundColor="white";
        }

        for (var i = 0; i < demotexts.length; i++) {
            demotexts[i].style.color="#928d88";
        }
    }
}

function changeSwingMapImg(name) {
    document.getElementById("swingMap").src = "img/Swing_States/"+name+".png";
}

$(window).resize(function () { getNavbarLocation() });

function getNavbarLocation() {
    var w = document.body.scrollWidth;
    var location = (w/2)+57;
    console.log("width: "+w+" (width/2)+57: "+location);
    document.getElementById("navbar").style.width = location+"px";
}