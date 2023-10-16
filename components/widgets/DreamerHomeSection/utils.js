export const CARD_SETTINGS = {
  arrows: false,
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 713,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

export const CARD_DATA = [
  {
    src: "/home_1.png",
    title: "Forest Retreat",
    content:
      "Are you looking to find your dream home or invest in a lucrative property."
  },
  {
    src: "/home_2.png",
    title: "Woodland Retreat",
    content:
      "When it comes to selling your property, our team is equipped with the expertise."
  },
  {
    src: "/home_3.png",
    title: "Harmony House",
    content:
      "Our agents will guide you through the entire buying process, from property"
  },
  {
    src: "/home_4.png",
    title: "Aliva Priva Jardin",
    content:
      "If you're in need of rental services, our team can assist you in finding suitable"
  }
];
