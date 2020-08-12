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


//
//        var artefact = setInterval(function () {
//            $(".cursorArtefact").css({
//
//                top: (mouseY - 5),
//                left: (mouseX - 5),
//            });
//
//        }, 5)

    });

});