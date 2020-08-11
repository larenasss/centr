import $ from 'jquery';

$('.js-label').click(function() {
  var id = $(this).attr('data-tab'), // 1
    content = $('.tabs__content[data-tab="'+ id +'"]'); // 2
    
  $('.js-label.active').removeClass('active'); // 1
  $(this).addClass('active'); // 2

  $('.tabs__content.active').removeClass('active'); // 3
  content.addClass('active'); // 4
   
});

$('.js-label-card').click(function() {
  var id = $(this).attr('data-tab'), // 1
    content = $('.card__desc[data-tab="'+ id +'"]'); // 2
    
  $('.js-label-card.active').removeClass('active'); // 1
  $(this).addClass('active'); // 2

  $('.card__desc.active').removeClass('active'); // 3
  content.addClass('active'); // 4
   
});