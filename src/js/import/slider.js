import $ from 'jquery';
import 'slick-carousel';

$(document).ready(() => {

  //Слайдеры
  $('.slider__list').slick({
    prevArrow: ".slider-btn__prev",
    nextArrow: ".slider-btn__next",
    dots: true,
    dotsClass: "slider__dots"
  });

  $('.slider-product_one').slick({
    prevArrow: ".slider-product__btn-prev-one",
    nextArrow: ".slider-product__btn-next-one",
    slidesToShow: 7,
    slidesToScroll: 3,
    infinite: true,
    responsive: [
      {
        breakpoint: 2200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.slider-product_two').slick({
    prevArrow: ".slider-product__btn-prev-two",
    nextArrow: ".slider-product__btn-next-two",
    slidesToShow: 7,
    slidesToScroll: 3,
    infinite: true,
    responsive: [
      {
        breakpoint: 2200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.slider-product_three').slick({
    prevArrow: ".slider-product__btn-prev-three",
    nextArrow: ".slider-product__btn-next-three",
    slidesToShow: 7,
    slidesToScroll: 3,
    infinite: true,
    responsive: [
      {
        breakpoint: 2200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.card__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.card__tumb',
    prevArrow: ".card-slider__btn-prev",
    nextArrow: ".card-slider__btn-next",
    responsive: [
      {
        breakpoint: 480,
        settings: {
          asNavFor: null,
          dots: true,
          dotsClass: "slider__dots"
        }
      }
    ]
  });
  $('.card__tumb').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.card__slider',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          asNavFor: null
        }
      }
    ]
  });

  let body = document.getElementsByTagName('body')[0];

  function popupShow() {
    var w = body.offsetWidth;
    body.style.overflow = 'hidden';
    body.style.width = w + 'px';
  }
  
  function popupClose() {
    body.style.overflow = 'initial';
    body.style.width = 'auto';
  }

  const clickItemBigSlider = $('.js-card-item-click');
  const clickItemMinSlider = $('.card__tumb li');
  const closePopupSlider = $('.popup-slider__close');
  const sliderPopup = document.querySelector('.popup-slider');

  let showPopupSlider = function(item) {
    item.on('click', function(){
      sliderPopup.style.display = 'flex';
      if (window.matchMedia("(min-width: 768px)").matches) {
        popupShow();
      }

      $('.card__slider-popup').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.card__tumb-popup',
        prevArrow: ".card-slider__btn-prev-popup",
        nextArrow: ".card-slider__btn-next-popup",
        responsive: [
          {
            breakpoint: 480,
            settings: {
              asNavFor: null,
              dots: true,
              dotsClass: "slider__dots"
            }
          }
        ]
      });
      $('.card__tumb-popup').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.card__slider-popup',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 480,
            settings: {
              asNavFor: null
            }
          }
        ]
      });
    })
  }

  closePopupSlider.on('click', function() {
    popupClose();
    sliderPopup.style.display = 'none';
  })

  showPopupSlider(clickItemBigSlider);
  showPopupSlider(clickItemMinSlider);

  if (window.matchMedia("(max-width: 768px)").matches) {
    $('.slider-product_one').slick('unslick');
    $('.slider-product_two').slick('unslick');
    $('.slider-product_three').slick('unslick');
    clickItemBigSlider.on('click', function(){
      sliderPopup.style.display = 'none';
      $('.card__tumb-popup').slick('unslick');
      $('.card__slider-popup').slick('unslick');
    })
    clickItemMinSlider.on('click', function(){
      sliderPopup.style.display = 'none';
      $('.card__tumb-popup').slick('unslick');
      $('.card__slider-popup').slick('unslick');
    })
  }
})