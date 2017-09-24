const BODY = $('body');

let menu = $('.js-menu');
let btn = $('.js-btn-menu');

btn.on('click', function() {
  $(this).parent().toggleClass('is-active');
  menu.toggleClass('is-open');
  
  return false;

});


BODY.on('click', function(event) { 
  if(!$(event.target).closest('.js-menu').length) {
    if(menu.hasClass('is-open')) {
      menu.removeClass('is-open');
      btn.parent().removeClass('is-active');
    }
  }        
});
