function changeImage() {

    if (document.getElementById("imgToChange").src == "https://66.media.tumblr.com/c379d02270d7c0d34a913882d2bc790e/tumblr_obk6y4EVJr1tbed15o2_1280.png") 
    {
        document.getElementById("imgToChange").src = "https://66.media.tumblr.com/fbcb7869bdb93a520b5fbfa7a3c0768a/tumblr_obk6y4EVJr1tbed15o1_1280.png";
        document.body.style.background = '#ddf1f0';
    }
    else 
    {
        document.getElementById("imgToChange").src = "https://66.media.tumblr.com/c379d02270d7c0d34a913882d2bc790e/tumblr_obk6y4EVJr1tbed15o2_1280.png";
        document.body.style.background = '#221f5a';
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