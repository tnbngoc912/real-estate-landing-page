export const SLIDE_SETTINGS = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  speed: 6000,
  autoplaySpeed: 500,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false,
        speed: 6000,
        autoplaySpeed: 500,
        cssEase: "linear"
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
        dots: false,
        speed: 6000,
        autoplaySpeed: 500,
        cssEase: "linear"
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 6000,
        autoplaySpeed: 500,
        cssEase: "linear"
      }
    }
  ]
};

export const SLIDE_DATA = [
  {
    src: "/icons/icon-amenities.svg",
    content: "Exclusive Amenities"
  },
  {
    src: "/icons/icon-bathroom.svg",
    content: "Jacuzzi 3 Bathrooms"
  },
  {
    src: "/icons/icon-bedroom.svg",
    content: "Front Beach 3 Bedrooms"
  },
  {
    src: "/icons/icon-clock.svg",
    content: "Concierge 24 hours"
  }
];
