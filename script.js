var loader = document.getElementById("preloader");
window.addEventListener("load", function() {
    loader.style.display = "none";
})

$(function() {
    $('.chart').easyPieChart({
        size: 160,
        barColor: "#2c3baf",
        scaleLength: 0,
        lineWidth: 15,
        trackColor: "#cdcdcd",
        lineCap: "circle",
        animate: 4000,
    });
});