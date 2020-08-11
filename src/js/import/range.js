import $ from 'jquery';
import noUiSlider from 'nouislider';

let rangeOne = $('.filter-slider__range');
var snapValues = [
  document.querySelector('.js-range-input-one'),
  document.querySelector('.js-range-input-two')
];

if (rangeOne.length){
  noUiSlider.create(rangeOne[0], {
    start: [24000, 82000],
    behaviour: 'drag',
    connect: true,
    range: {
        'min': 0,
        'max': 100000
    },
    format: {
        to: function (value) {
          return Math.floor(value).toLocaleString('ru');
        },
        from: function (value) {
            return Math.floor(value);
        }
    }
  });
  
  rangeOne[0].noUiSlider.on('update', function (values, handle) {
    snapValues[handle].innerHTML = values[handle];
  });

}

