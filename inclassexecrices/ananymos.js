let timer = null;

window.onload = function () {
    document.getElementById("clickbtn").onclick = function delayMsg2 () {
        if (timer == null) {
            timer = setInterval(function () {
                document.getElementById("output").innerHTML += "  Rudy!";
            }, 1000);
        } else {
            clearInterval(timer);
            timer = null;
        }

    }
}