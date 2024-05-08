document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("header").classList.add("hidden");
        document.getElementById("main").classList.add("hidden");
        document.getElementById("footer").classList.add("hidden");
    }, 10000); // 1000 milissegundos = 1 segundo

    setTimeout(function() {
        let video = document.getElementById("fullscreen-video");
        video.style.display = "block";
        video.play();

        video.addEventListener('ended', function() {
            document.getElementById("header").classList.remove("hidden");
            document.getElementById("main").classList.remove("hidden");
            document.getElementById("footer").classList.remove("hidden");
        });
    }, 10000); // 5000 milissegundos = 5 segundos
});