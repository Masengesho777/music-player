let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctlIcon = document.getElementById("ctlIcon");

// song.onloadedmetadata = function () {
//     progress.max = song.duration;
//     progress.value = song.currentTime;
// }

song.addEventListener("loadedmetadata", function() {
    progress.max = song.duration;
   progress.value = song.currentTime


});

function playPause() {
    if (ctlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctlIcon.classList.remove("fa-pause");
        ctlIcon.classList.add("fa-play");
        //    console.log("hello")
    }
    else {
        song.play();
        ctlIcon.classList.add("fa-pause");
        ctlIcon.classList.remove("fa-play");
    }
}
if (song.play()) {

    setInterval(() => {
        progress.value = song.currentTime;
    }, 500)

}
progress.onchange = function () {
    song.play();
    song.currentTime = progress.value;
    ctlIcon.classList.add("fa-pause");
    ctlIcon.classList.remove("fa-play");
}