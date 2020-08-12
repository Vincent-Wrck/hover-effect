$(document).ready(function () {
    
     $(".title").mouseover(function () {

            var colorArray = ["#13B3F2", "#17A655", "#D9D5D2", "#8C4014"];
            var randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];

            $(this).css({

                color: randomColor,
                cursor: "none",
                transition: "300ms ease",

            });

            $(".cursor").css({

                borderColor: randomColor,

            });
         
//            $(".cursorArtefact").css({
//                
//                background: randomColor,
//                
//            })

        });

});