import $ from "jquery";

$(document).ready(() => {
  // Шапка

  $(window).scroll(function() {
    if ($(this).scrollTop() > 10){
      $('.header__bottom').addClass("sticky");
      $('.sidebar').addClass("active");
    }
    else{
      $('.header__bottom').removeClass("sticky");
      $('.sidebar').removeClass("active");
    }
    });
    

    // Показывать фильтр

      
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

    const buttonShowFilter = $('.breadcrumb-mobile__all');
    const filterMobile = $('.filter-mobile');
    const filterMobileClose = $('.filter-mobile__close');

    buttonShowFilter.on('click', function(){
      filterMobile.addClass('active');
      popupShow();
    })

    filterMobileClose.on('click', function(){
      filterMobile.removeClass('active');
      popupClose();
    })

    const ratingItemsList = document.querySelectorAll('.rating__item');
    const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

    ratingItemsArray.forEach(item =>
      item.addEventListener('click', () => {
        const { itemValue } = item.dataset; // Передаем на сервер для закрепа рейтинга
        item.parentNode.dataset.totalValue = itemValue;
      })  
    );
    
});