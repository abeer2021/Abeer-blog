(function () {

  $(document).ready(function () {
    $('.sliderblog').slick({
      dots: true,
      infinite: true,
      speed: 800,
      autoplay:true,
      mobileFirst:true,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 648,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            dots: false,
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 1400,
          settings: {
            dots: false,
            slidesToShow: 3,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  });

})();