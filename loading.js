setTimeout (
    function move() {
        var elem = document.getElementById("bar");
        var width = 0;
        var id = setInterval(frame, 70);
        function frame() {
            if (width >= 30) {
                clearInterval(id);
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }, 500);
setTimeout(
    function move1() {
    var width1 = 0;
    var elem1 = document.getElementById("bar1");
    var id1 = setInterval(frame1, 3);
    function frame1() {
        if (width1 >= 70) {
            clearInterval(id1);
        } else {
            width1++;
            elem1.style.width = width1 + "%";
        }
    }
}, 2600);