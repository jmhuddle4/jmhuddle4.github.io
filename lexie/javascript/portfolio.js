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
