(function() {
// navbar scroll change
$(window).scroll(function() {
    if ($(window).scrollTop() > $(".navbar").height()) {
        $(".navbar").addClass('bg-white')
        $(".navbar-link").addClass("dark")
        $(".navbar-logo").addClass('logodark')
        $(".navbar .material-icons").addClass('burguer-black')
    } else {
        $(".navbar").removeClass('bg-white')
        $(".navbar-link").removeClass("dark")
        $(".navbar-logo").removeClass('logodark')
        $(".navbar .material-icons").removeClass('burguer-black')
    }
});

    function changeNavbarColor() {
        $(".navbar").toggleClass('bg-black')
        $(".navbar-logo").toggleClass('logolight')
        $(".navbar .material-icons").toggleClass('burguer-white')
    }

// navbar burguer on click open
$(".navbar-burguer").on('click', function () {
    $(".burguer-list").slideToggle()
    changeNavbarColor()
});

// burguer menu on click outside close
$(document).on('click', function (e) {
    if ($(".burguer-list").is(":visible") 
    && !$(e.target).hasClass("material-icons")) {
        $(".burguer-list").slideToggle()
    }
})


})();