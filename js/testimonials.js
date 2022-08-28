(function() {

// changing testimonials onclick    
let testimonial = $(".testimonial")

$(document).on('click','.slider', function(){
    $(this).removeClass('slider').addClass('slider-active');
    $(this).siblings().removeClass('slider-active').addClass('slider');

    let number = $(this).data().pos;
    let testSelected = $(`#testmonial${number}`).html();
    testimonial.html('');
    testimonial.html(testSelected).find('.textTest').removeClass('fade');
});

// changing testimonials at intervals 
setInterval(function() { 
    let selectedSlider = $('.slider-active')
    selectedSlider.removeClass('slider-active').addClass('slider')

    if(selectedSlider.data().pos == 3){
        let firstBullet = $('#slidernav').children('a').first();
        $('#slidernav').children('a').first().addClass('slider-active');
    } else {
        selectedSlider.next().addClass('slider-active');
    }

    let number = $('.slider-active').data().pos;
    let testSelected = $(`#testmonial${number}`).html();
    testimonial.html('');
    testimonial.html(testSelected).find('.textTest').removeClass('fade');
}, 5000);

})();