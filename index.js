$(document).ready(function () {
    $(window).scroll(function () {

        console.log($(this).scrollTop())
        if ($(winwow).scrollTop() > 100) {
            $(".back-to-top").fadeIn();
        }
        else {
            $("back-to-top").fadeOut();
        }
    });
    $(".back-to-top").click(function () {
        $("html,body").animate({ scrollTop:0},700);
        return false
    })
});
