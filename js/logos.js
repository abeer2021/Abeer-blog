(function() {
    
    //infinite scroll
    $('.carousel-container').on('scroll', function(event) {
        let factor = this.scrollLeft / (this.scrollWidth - $('.logos-carousel').width());
        if (factor < 0.1) {
            let move = $('.logos-carousel').children().last();
            move.remove();
            $('.logos-carousel').prepend(move);
            this.scrollLeft += move.width()/10;
        } else if (factor > 0.9) {
            let move = $('.logos-carousel').children().first();
            move.remove();
            $('.logos-carousel').append(move);
            this.scrollLeft -= move.width()/10;
        }
    });

})();