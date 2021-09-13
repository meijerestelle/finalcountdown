var d = new Date("Sep 13, 2021 17:30:00").getTime();

console.log(d);

var x = setInterval(function() {
    var now = new Date().getTime();

    var distance = d - now;

    var days = Math.floor(distance/ (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById('countdown').innerHTML = string.link('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    }
});