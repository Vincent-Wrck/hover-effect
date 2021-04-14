$(document).ready(function () {
    $(".container").css({
        cursor: "none",
    });
    $(document).mousemove(function (event) {
        var mouseX = event.pageX;
        var mouseY = event.pageY;
        $(".cursor").css({
            top: mouseY,
            left: mouseX,
        });
        $(".cursorDelay").css({
            top: mouseY,
            left: mouseX,
        });
    });
});
