// Audio Player
// Source: http://www.danceradiouk.com 
//         http://uk2.internet-radio.com:8024/;stream

var audio;

function initAudioPlayer(){
       audio = new Audio();
       audio.src = "C:\Users\HP\Downloads\Ebony song";
       audio.loop = true;
       audio.play(); 
}
window.addEventListener("load", initAudioPlayer);
$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});



