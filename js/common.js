$(function() {

	// Scroll to element
  $("a.scrollto").click(function() {
    var elementClick = '#' + $(this).attr("href").split("#")[1]
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 600);
    return false;
  });

  // Main slider
  $('.main-slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
  });

  // Models slider
  $('.models-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // News slider
  $('.news-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // Dealer slider
  $('.dealer-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false
  });

  // Offers slider
  $('.offers-slider').slick({
    infinite: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
  });

  // Forms validation
  $("#phoneInput").mask("+7(999) 999-99-99");

});
