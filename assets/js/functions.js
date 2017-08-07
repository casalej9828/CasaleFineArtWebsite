$(function() {
	smoothScroll(300);

	clientStuff();
 	lightboxStuff();
	buybutton();

});

// smoothScroll function is applied from the document ready function
function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}




function clientStuff(){

  $('.client-unit').first().addClass('active-client');
  $('.client-logo').first().addClass('active-client');

  $('.client-logo').click(function() {
    var $this = $(this),
      $siblings = $this.parent().children(),
      position = $siblings.index($this);

    $('.client-unit').removeClass('active-client').eq(position).addClass('active-client')
    $siblings.removeClass('active-client')
    $this.addClass('active-client')
  });

  $('.client-control-next, .client-control-prev').click(function() {

    var $this = $(this),
      curActiveClient = $('.client-belt').find('.active-client'),
      position = $('.client-belt').children().index(curActiveClient),
      clientNum = $('.client-unit').length;

      if($this.hasClass('client-control-next')) {

        if (position < clientNum -1) {
          $('.active-client').removeClass('active-client').next().addClass('active-client');

        } else {
          $('.client-unit').removeClass('active-client').first().addClass('active-client');
          $('.client-logo').removeClass('active-client').first().addClass('active-client');
        }
      } else {
        if (position === 0) {
          $('.client-unit').removeClass('active-client').last().addClass('active-client')
          $('.client-logo').removeClass('active-client').last().addClass('active-client')
        } else {
          $('.active-client').removeClass('active-client').prev().addClass('active-client')

        }
      }

  });
}

function lightboxStuff(){

	//$('.art-unit').first().addClass('active-art');
	$('.painting-unit').first().addClass('active-painting');

	//open lightbox and navigate to appropriate painting
	$('.art-unit').click(function() {
		var $this = $(this),
			$siblings = $this.parent().children(),
			position = $('.art-unit').index($this);


			$('.painting-unit').removeClass('active-painting').eq(position).addClass('active-painting');
			$('.section-lightbox').addClass('active-lightbox');
	});

	//close lightbox
	$('.painting-control-close').click(function() {

		$('.section-lightbox').removeClass('active-lightbox');

	});

	//next and prevous button functionality
	$('.painting-control-next, .painting-control-prev').click(function() {
		var $this = $(this),
			curActivePainting = $('.painting-belt').find('.active-painting'),
			position = $('.painting-belt').children().index(curActivePainting),
			paintingNum = $('.painting-unit').length;

			if($this.hasClass('painting-control-next')) {
				if(position < paintingNum -1) {
					$('.active-painting').removeClass('active-painting').next().addClass('active-painting');
				} else {
					$('.painting-unit').removeClass('active-painting').first().addClass('active-painting');
				}
			} else {
				if(position === 0) {
					$('.painting-unit').removeClass('active-painting').last().addClass('active-painting');
				} else {
					$('.active-painting').removeClass('active-painting').prev().addClass('active-painting');

				}
			}


	});

}


function buybutton() {
	$('.purchase').click(function() {
		var $this = $(this),
		paintingMessage = "Hello Jordan,  I am interested in your painting called ",
		$siblings = $this.parent().children(),
		paintingName = $siblings.html()

		paintingMessage = paintingMessage + paintingName
		paintingMessage = paintingMessage + ".  Please email me at your earliest convienice."
		document.getElementById("message").value = paintingMessage;

		console.log(paintingName)
	});
}
