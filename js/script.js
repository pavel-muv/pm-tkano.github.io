// $('.history-slider').slick({
//     slidesToShow:4,
//     arrows: false,
//     centerPadding: '30px',
//     infinite: false,
//     responsive: [
//         {
//             breakpoint: 1024,
//             settings: {
//               slidesToShow: 3,
//               slidesToScroll: 1,
//             }
//           },
//           {
//             breakpoint: 767,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 1
//             }
//         },
//         {
//             breakpoint: 495,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 adaptiveHeight: true,
//             }
//           },
//     ],
// });


$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:false
      },
      495:{
          items:2,
          nav:false
      },
      768:{
          items:3,
          nav:false
      },
      1024:{
          items:4,
          nav:false,
          loop:false
      }
  }
})