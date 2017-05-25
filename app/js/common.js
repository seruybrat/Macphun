(function() {

    var $vividBlock = $(".vivid"), // scrollable block
        imgWidth = $(".before-after__pic").width(), // main picture
        initSplit = Math.round(imgWidth / 2);

    $vividBlock.width(initSplit);

    $(".before-after__window").mousemove(function(e) {

        var offX = e.offsetX || e.clientX - $vividBlock.offset().left;
        $vividBlock.width(offX);
      
    });

    $(".before-after__window").mouseleave(function(e) {

        $vividBlock.stop().animate(
          {
              width: initSplit
          },
          1000
        );

    });

    $('.slider__item').click(function(e){

        $('.slider__item').removeClass("active");
        $(this).addClass("active");

        var content = $(this).html();

        $('.before-after__img-out').html(content);

    });

    $('input[type=range]').on("change mousemove", function() {

        $('.vivid').css("background-color", "rgba(255,255,255," + $(this).val() + ")");

    });

})();