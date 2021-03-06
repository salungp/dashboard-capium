$( function() {

  var cond = true;

  $('.button-toggle-search').click(function() {
  	$('.input-rounded').toggleClass('active');
  	$('.btn-close-search').toggleClass('d-none');
  	$('.left').toggleClass('d-none');
  });

  $('.btn-close-search').click(function() {
  	$('.input-rounded').toggleClass('active');
  	$('.btn-close-search').toggleClass('d-none');
  	$('.left').toggleClass('d-none');
  });

  $('.btn-toggle-nav').click(function() {
  	$('.sidebar').toggleClass('sidebar-active');
  });

  $('.search-auto').click(function() {
  	$(this).parents('.autosearch').find('.autosearch-list-item').toggleClass('show');
  });

  $('#search-auto').click(function() {
    $('.autosearch-list-item-2').toggleClass('show');
  });

  $('.folder-list-item').click(function() {
    $('.folder-toggle').toggleClass('hide');
    $('.folder-toggle').toggleClass('animate__animated');
    $('.folder-toggle').toggleClass('animate__tada');
  });

  $(window).click(function(event) {
  	var target = $( event.target );
	  if (!target.is('.search-auto')) {
	    $('.autosearch-list-item').removeClass('show');
      $('.autosearch-list-item-2').removeClass('show');
	  }
	});

});