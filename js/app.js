window.onload = app;

function app() {
    "use strict";

    function time() {

        var d = new Date();

        var seconds = d.getSeconds();
        var minutes = d.getMinutes();
        var hours = d.getHours();

        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (hours < 10) {
            hours = "0" + hours;

        }
        //if (hours > 12) {
        //    hours = hours - 12;
        //    hours = "0" + hours;
        //}
        var showTime = [hours, minutes, seconds];
        div.textContent = showTime.join(":");
        body.style["background-color"] = "rgb(" + convertTimeToRGB(showTime).join(",") + ")";
    	underline.style["width"] = 18*(seconds/60)+"em";
    	overline.style["width"] = 18*(seconds/60)+"em";
    }

    function convertTimeToRGB(timeConvert) {

        var result = [];

        result[0] = ~~((timeConvert[0] / 24) * 256);
        result[1] = ~~((timeConvert[1] / 60) * 256);
        result[2] = ~~((timeConvert[2] / 60) * 256);

        return result;
    }
    var div = document.querySelector(".clock");
    var body = document.querySelector("body");
    var underline = document.querySelector(".underline");
    var overline = document.querySelector(".overline");
    setInterval(time, 1000);
}
