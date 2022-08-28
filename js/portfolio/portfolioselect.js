(function () {

    //filter photos on click by theme
    $(".list-icon").on('click', function() {
        $(this).siblings().removeClass('listactive')
        $(this).addClass('listactive');
        let portfoliolist = $(".portfolio-works").children();
        let selected = $(this).text().toLowerCase();

        let invisible = $(portfoliolist).not(`a.${selected}`)
        let visible = $(portfoliolist).filter(`a.${selected}`)
        console.log(visible)
        invisible.hide();
        visible.show();
    });

})();