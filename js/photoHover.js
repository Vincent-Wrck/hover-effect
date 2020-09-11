$(document).ready(function () {

    let photoHover = $(".photoHover");
    let isHoverActive = false;
    $(photoHover).hover(function () {
        isHoverActive = true;
        setTimeout(function () {
            if (isHoverActive) {
                $("img").css({
                    transform: "translateY(0%)",
                    opacity: 0.8,
                });
                $("h2").css({
                    transform: "translateY(100%)",
                    opacity: 0,
                });
                $(".photoInfo").css({
                    transform: "translateX(0%)",
                    opacity: 1
                });
            }
        }, 300);
        }, function () {

        isHoverActive = false;

        $("img").css({
            opacity: 0,
            transform: "translateY(100%)",
        });

        $("h2").css({
            transform: "translateY(0%)",
            opacity: 1,
        });

        $(".photoInfo").css({
            transform: "translateX(-100%)",
            opacity: 0,
        });

    });

});
