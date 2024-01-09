let time = document.getElementById("current-time");

setInterval(() => {
    let d = new Date();
    time.innerHTML = " Time: " + d.toLocaleTimeString() + " <br> " + " Date:" + d.toLocaleDateString();

});