// USE THIS 4 SLIDER

$('.one-time').slick({
    dots: false,
    arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dotsClass: '.customer__slider-buttons'
  
    // responsive: [
    //     {
    //         breakpoint: 1280,
    //         settings: {
    //             slidesToShow: 1,
    //         }
    //     }
	//     {
	//       breakpoint: 768,
	//       settings: {
	//         slidesToShow: 1,
	//       }
	//     },
	//     {
	//       breakpoint: 480,
	//       settings: {
    //           slidesToShow: 1,
    //           autoplay: false,

	//       }
	//     }
    // ]
    
});

// $('.single-item').slick('slickCurrentSlide');