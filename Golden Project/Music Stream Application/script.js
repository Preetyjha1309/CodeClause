document.addEventListener("DOMContentLoaded", function() {
    const audioPlayer = document.getElementById("audioPlayer");
    const audioSource = document.getElementById("audioSource");
    const playlist = document.getElementById("playlist");

    playlist.addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            const songSrc = event.target.getAttribute("data-src");
            audioSource.src = songSrc;
            audioPlayer.load();
            audioPlayer.play();
        }
    });
});
