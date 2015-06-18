Reveal.addEventListener( 'fragmentshown', function( event ) {
	var fragment = event.fragment;
  if( $(fragment).hasClass('one-way-img') ){
  	$('.one-way-shrinked').fadeToggle();
  }else if($(fragment).hasClass('two-way-binding-img') ){
  	$('.two-way-binding-gif').fadeToggle();
  }
});

Reveal.addEventListener( 'fragmenthidden', function( event ) {
  var fragment = event.fragment;
  if( $(fragment).hasClass('one-way-img') ){
  	$('.one-way-shrinked').fadeToggle();
  }else if($(fragment).hasClass('two-way-binding-img') ){
  	$('.two-way-binding-gif').fadeToggle();
  }
});

