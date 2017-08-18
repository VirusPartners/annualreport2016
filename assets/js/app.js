jQuery(document).ready(function(event) {

	// share
	$('.share').on('click', function(event) {
		event.preventDefault();
		$('.social-icon').toggleClass('hello');
	});

	//navigation

	$('.menu-button, .moving-burger').on('click', function(event) {

		event.preventDefault();

		$('.menu-button').toggleClass('menu-button-active');

		$('.fixed-navigation').toggleClass('fixed-navigation-active');

		$('.side-nav').toggleClass('side-nav-active');

		$('.moving-burger > span, .moving-burger').toggleClass('moving-burger-active');

		$('.download').toggleClass('download-active');

		$('.share').toggleClass('share-active');

	});



	// drag

	if ($(window).width() <= 425) {

	   $('.unionforlife').draggable();

	}



	$('.arrow-down').click(function(){

		$('html, body').animate({

			scrollTop: $( $(this).attr('href') ).offset().top

		}, 500);

		return false;

	});



	$('#story .message-list').on('click', function(event) {

		event.preventDefault();

		var id = $(this).attr('id');

		if (id != 'tab1') {

			$('.video-link-stories').hide('fast');

		}else {

			$('.video-link-stories').show('fast');

		}

	});



	// financial tabs

	$('#financial #tab1').addClass('financial-list-active');

	$('#fyfh, #afh, #smr, #iar').addClass('fade-out');

	$('.financial-list > a').on('click', function(event) {

		event.preventDefault();

		var id = $(this).parent().attr('id');

		if (id != 'tab1') {



			// tab2

			$('#cons').on('click', function(event) {

				event.preventDefault();

				$('#'+id).addClass('financial-list-active');

				$('#tab1').removeClass('financial-list-active');

				$('#tab3').removeClass('financial-list-active');



				// show this

				$('#fyfh').removeClass('fade-out');



				// hide these

				$('#consolidated').addClass('fade-out');

				$('#afh').addClass('fade-out');

				$('#smr').addClass('fade-out');

				$('#iar').addClass('fade-out');

			});



			$('#pc').on('click', function(event) {

				event.preventDefault();

				$('#'+id).addClass('financial-list-active');

				$('#tab1').removeClass('financial-list-active');

				$('#tab3').removeClass('financial-list-active');



				// show this

				$('#afh').removeClass('fade-out');



				// hide these

				$('#consolidated').addClass('fade-out');

				$('#fyfh').addClass('fade-out');

				$('#smr').addClass('fade-out');

				$('#iar').addClass('fade-out');

			});



			// tab3

			$('#smr-btn').on('click', function(event) {

				event.preventDefault();

				$('#'+id).addClass('financial-list-active');

				$('#tab1').removeClass('financial-list-active');

				$('#tab2').removeClass('financial-list-active');



				// show this

				$('#smr').removeClass('fade-out');



				// hide these

				$('#consolidated').addClass('fade-out');

				$('#afh').addClass('fade-out');

				$('#fyfh').addClass('fade-out');

				$('#iar').addClass('fade-out');

			});



			$('#iar-btn').on('click', function(event) {

				event.preventDefault();

				$('#'+id).addClass('financial-list-active');

				$('#tab1').removeClass('financial-list-active');

				$('#tab2').removeClass('financial-list-active');



				// show this

				$('#iar').removeClass('fade-out');



				// hide these

				$('#consolidated').addClass('fade-out');

				$('#afh').addClass('fade-out');

				$('#fyfh').addClass('fade-out');

				$('#smr').addClass('fade-out');

			});	

		}else {

			// tab 1

			$('#'+id).addClass('financial-list-active');

			$('#tab2').removeClass('financial-list-active');

			$('#tab3').removeClass('financial-list-active');



			// show this

			$('#consolidated').removeClass('fade-out');

			

			// hide these

			$('#fyfh').addClass('fade-out');

			$('#afh').addClass('fade-out');

			$('#smr').addClass('fade-out');

			$('#iar').addClass('fade-out');

		}

	});



	// wow//=========== WOW JS

    wow = new WOW({

        boxClass: 'wow',

        animateClass: 'animated',

        offset: 10,

        mobile: true,

        live: true,

    });

    wow.init();



    // pagination

    pagination();



    // checkbox category

	$('#revenues').on('click', function(event) {

	    if ($('#revenues').is(':checked')) {

			$('#consolidated-revenues').show('fast');

	    }else {

			$('#consolidated-revenues').hide('fast');

	    }

	});



	$('#assets').on('click', function(event) {

	    if ($('#assets').is(':checked')) {

			$('#consolidated-assets').show('fast');

	    }else {

			$('#consolidated-assets').hide('fast');

	    }

	});



	$('#net').on('click', function(event) {

	    if ($('#net').is(':checked')) {

			$('#consolidated-net-income').show('fast');

	    }else {

			$('#consolidated-net-income').hide('fast');

	    }

	});



	$('#equity').on('click', function(event) {

	    if ($('#equity').is(':checked')) {

			$('#consolidated-equity').show('fast');

	    }else {

			$('#consolidated-equity').hide('fast');

	    }

	});



	// checkbox compare

	$('#year-2012').on('click', function(event) {

	    if ($('#year-2012').is(':checked')) {

			$('.data-value-2012').animate({width: '100%'}, 500);

	    }else {

			$('.data-value-2012').animate({width: 0}, 500);

	    }

	});



	$('#year-2013').on('click', function(event) {

	    if ($('#year-2013').is(':checked')) {

			$('.data-value-2013').animate({width: '100%'}, 500);

	    }else {

			$('.data-value-2013').animate({width: 0}, 500);

	    }

	});



	$('#year-2014').on('click', function(event) {

	    if ($('#year-2014').is(':checked')) {

			$('.data-value-2014').animate({width: '100%'}, 500);

	    }else {

			$('.data-value-2014').animate({width: 0}, 500);

	    }

	});



	$('#year-2015').on('click', function(event) {

	    if ($('#year-2015').is(':checked')) {

			$('.data-value-2015').animate({width: '100%'}, 500);

	    }else {

			$('.data-value-2015').animate({width: 0}, 500);

	    }

	});



	$('#year-2016').on('click', function(event) {

	    if ($('#year-2016').is(':checked')) {

			$('.data-value-2016').animate({width: '100%'}, 500);

	    }else {

			$('.data-value-2016').animate({width: 0}, 500);

	    }

	});



	// bars

	$(window).scroll(function() {

	   var hT = $('#consolidated-assets').offset().top,

	       hH = $('#consolidated-assets').outerHeight(),

	       wH = $(window).height(),

	       wS = $(this).scrollTop();

	   if (wS > (hT+hH-wH)){

	   		$('.data-value').addClass('data-value-active');

	   }

	});



	// counter

	$('.counter').each(function () {

	    $(this).prop('Counter',0).animate({

	        Counter: $(this).text()

	    }, {

	    duration: 1500,

	    easing: 'swing',

	    step: function (now) {

	            $(this).text(Math.round(now*10)/10);

	        }

	    });

	});

	// people

	$('#people .message-tab a').on('click',function(event){

		event.preventDefault();

		var id = $(this).attr('href');

		$('#people .message-tab li').removeClass('message-list-active');



		if($(id).css('display') == 'none'){

			$('.people-container').css('display','none');

			$('.people-container').removeClass('active');

			$(id).css('display','block');

			$(id).addClass('active');

			pagination();

			$(this).parent().addClass('message-list-active');

		} else {

			$(this).parent().addClass('message-list-active');

		}

	});

	// messages

	$('#mtp .message-tab a').on('click',function(event){

		event.preventDefault();

		var id = $(this).attr('href');

		$('#mtp .message-tab li').removeClass('message-list-active');



		if($(id).css('display') == 'none'){

			$('.policyholder-container').css('display','none');

			$('.policyholder-container').removeClass('active');

			$(id).css('display','block');

			$(id).addClass('active');

			pagination();

			$(this).parent().addClass('message-list-active');

		} else {

			$(this).parent().addClass('message-list-active');

		}

	});



	// corporate social responsibility

	$('#csr .message-tab a').on('click',function(event){

		event.preventDefault();

		var id = $(this).attr('href');

		$('#csr .message-tab li').removeClass('message-list-active');



		if($(id).css('display') == 'none'){

			$('.csr-container').css('display','none');

			$('.csr-container').removeClass('active');

			$(id).css('display','block');

			$(id).addClass('active');

			pagination();

			$(this).parent().addClass('message-list-active');

		} else {

			$(this).parent().addClass('message-list-active');

		}

		 $('.timeline-row').each(function(){

	 		var height = $(this).find('.chat').height();

	 		$(this).height(height + 72);

		 });

	});



	// $('#page_navigation a').on('click', function(event) {

	// 	// console.log('t')

	// 	 $('.timeline-row').each(function(){

	//  		var height = $(this).find('.chat').height();

	//  		$(this).height(height + 72);

	// 	 });

	// });



	// stories

	$('#story .message-tab a').on('click',function(event){

		event.preventDefault();

		var id = $(this).attr('href');

		$('#story .message-tab li').removeClass('message-list-active');



		if($(id).css('display') == 'none'){

			$('.story-container').css('display','none');

			$('.story-container').removeClass('active');

			$(id).css('display','block');

			$(id).addClass('active');

			pagination();

			$(this).parent().addClass('message-list-active');

		} else {

			$(this).parent().addClass('message-list-active');

		}

	});



	// subsidiaries

	$('#subsidiaries .message-tab a').on('click',function(event){

		event.preventDefault();

		var id = $(this).attr('href');

		$('#subsidiaries .message-tab li').removeClass('message-list-active');



		if($(id).css('display') == 'none'){

			$('.subsidiaries-container').css('display','none');

			$('.subsidiaries-container').removeClass('active');

			$(id).css('display','block');

			$(id).addClass('active');

			pagination();



			$(this).parent().addClass('message-list-active');

		} else {

			$(this).parent().addClass('message-list-active');

		}

	});



	// board of trustees

	$('#rtbot').on('click', function(event) {

		$('#bot .message-tab li').removeClass('message-list-active');

		$('#bot #tab1').addClass('message-list-active');



		$('#board-of-trustees').addClass('active').css('display', 'block');

		$('#credentials').removeClass('active').css('display', 'none');



		$('#bot .collapse').removeClass('in');

		$('.credentials-arrow > img').removeClass('rotate');

		$('.cre-wrapper').removeClass('begone');

	});



	$('#bot .board-of-trustees-image').on('click', function(event) {

		$('#bot .message-tab li').removeClass('message-list-active');

		$('#bot #tab2').addClass('message-list-active');


		$('#board-of-trustees').removeClass('active').css('display', 'none');

		$('#credentials').addClass('active').css('display', 'block');


		var id = $(this).attr('id');

		var href = $('#'+id).parent().find('.board-of-trustees-name').attr('href');

		$(href).parent().children('.btn').find('.credentials-arrow > img').addClass('rotate');

		$(href).addClass('in');

		$(href).parent().addClass('stay');

		var superParent = $(href).parent().parent();

		$(superParent).children('.cre-wrapper').addClass('begone');

		$(superParent).children('.stay').removeClass('begone');

		var cred = $(href).parent().children('.btn');

		$('body, html').animate({

			'scrollTop': $(cred).offset().top

		}, 300);

	});



	// $('#bot .mobileview .bot-wrapper > img, #bot .mobileview .bot-wrapper > p').on('click', function(event) {

	// 	event.preventDefault();

	// 	$('#bot .message-tab li').removeClass('message-list-active');

	// 	$('#bot #tab2').addClass('message-list-active');



	// 	$('#board-of-trustees').removeClass('active').css('display', 'none');

	// 	$('#credentials').addClass('active').css('display', 'block');



	// 	var id = $(this).parent().children('.mobileview-id').attr('href');

	// 	console.log(id);

	// 	$(id).parent().children('.btn').find('.credentials-arrow > img').addClass('rotate');

	// 	$(id).addClass('in');

	// });				



	$('#bot .message-tab a').on('click',function(event){

		$('#bot .message-tab li').removeClass('message-list-active');

		var id = $(this).attr('href');

		if($(id).css('display') == 'none'){

			$('#bot .collapse').removeClass('in');

			$('.credentials-arrow > img').removeClass('rotate');

			$('.bot-parent').css('display','none');

			$('.bot-parent').removeClass('active');

			$(id).css('display','block');

			$(id).addClass('active');

			$('.cre-wrapper').removeClass('begone');

			pagination();

			$(this).parent().addClass('message-list-active');

		} else {

			$(this).parent().addClass('message-list-active');

		}

	});



	$('.board-of-trustees-image').mouseenter(function(event) {

		var imageId = $(this).attr('id');

		$('.overlay').addClass('overlay-active');

		$('.board-of-trustees-image').not('#'+imageId).css('z-index', '0');

		$('#name-'+imageId).removeClass('hide').removeClass('fadeOutDown').addClass('fadeInUp'); 		

	});



	$('.board-of-trustees-image').mouseleave(function(event) {

		var imageId = $(this).attr('id');

		$('.overlay').removeClass('overlay-active');

		$('.board-of-trustees-image').css('z-index', '1');

		$('#name-'+imageId).removeClass('fadeInUp').addClass('fadeOutDown');

	});



	$('.board-of-trustees-name').on('click', function(event) {

		event.preventDefault();

	});



	$('.bot-container').mouseleave(function(event) {

		$('.board-of-trustees-name').removeClass('fadeOutDown').addClass('hide');

	});



	// image caption

	$('.image-container').mouseenter(function(event) {

		$(this).find('.image-caption').removeClass('fadeOutDown').addClass('fadeInUp');	

	});

	$('.image-container').mouseleave(function(event) {

		$(this).find('.image-caption').removeClass('fadeInUp').addClass('fadeOutDown');

	});



	$('#leadership .message-list > a').on('click', function(event) {

		event.preventDefault();

		var id = $(this).parent().attr('id');

		if(id != 'tab1') {

			$('#svp-btn').on('click', function(event) {

				event.preventDefault();

				$('#leadership #'+id).addClass('message-list-active');

				$('#leadership #tab1').removeClass('message-list-active');



				$('#svp').removeClass('hide');



				$('#fvp').addClass('hide');

				$('#vp').addClass('hide');

				$('#savp').addClass('hide');

				$('#avp').addClass('hide');

				$('#lead').addClass('hide');

			});



			$('#fvp-btn').on('click', function(event) {

				event.preventDefault();

				$('#leadership #'+id).addClass('message-list-active');

				$('#leadership #tab1').removeClass('message-list-active');



				$('#fvp').removeClass('hide');

				pagination();



				$('#svp').addClass('hide');

				$('#vp').addClass('hide');

				$('#savp').addClass('hide');

				$('#avp').addClass('hide');

				$('#lead').addClass('hide');

			});



			$('#vp-btn').on('click', function(event) {

				event.preventDefault();

				$('#leadership #'+id).addClass('message-list-active');

				$('#leadership #tab1').removeClass('message-list-active');

				

				$('#vp').removeClass('hide');

				

				$('#svp').addClass('hide');

				$('#fvp').addClass('hide');

				$('#savp').addClass('hide');

				$('#avp').addClass('hide');

				$('#lead').addClass('hide');

			});



			$('#savp-btn').on('click', function(event) {

				event.preventDefault();

				$('#leadership #'+id).addClass('message-list-active');

				$('#leadership #tab1').removeClass('message-list-active');

				

				$('#savp').removeClass('hide');

				

				$('#svp').addClass('hide');

				$('#fvp').addClass('hide');

				$('#vp').addClass('hide');

				$('#avp').addClass('hide');

				$('#lead').addClass('hide');

			});



			$('#avp-btn').on('click', function(event) {

				event.preventDefault();

				$('#leadership #'+id).addClass('message-list-active');

				$('#leadership #tab1').removeClass('message-list-active');

				

				$('#avp').removeClass('hide');



				$('#svp').addClass('hide');

				$('#fvp').addClass('hide');

				$('#vp').addClass('hide');

				$('#savp').addClass('hide');

				$('#lead').addClass('hide');

			});

		}else {

			$('#leadership #'+id).addClass('message-list-active');

			$('#leadership #tab2').removeClass('message-list-active');



			$('#lead').removeClass('hide');

				

			$('#svp').addClass('hide');

			$('#fvp').addClass('hide');

			$('#vp').addClass('hide');

			$('#savp').addClass('hide');

			$('#avp').addClass('hide');

		}

	});		



	// credentials button-collapse

	$('.btn').on('click', function(event) {

		$(this).find('img').toggleClass('rotate');

	});



    $('body, html').delay(1000).animate({

        'scrollTop': $('.insidepage').offset().top

    }, 300);



});



$(window).scroll(function() {

	$('.timeline-row').each(function(){

		var height = $(this).find('.chat').height();

		$(this).height(height + 72);

	});

 });



function pagination(){

    //---------------testing pagination ---------------

    var show_per_page = 1;  

    //getting the amount of elements inside content div  

    var number_of_items = $('#mtp .policyholder-container.active .message-container, #people .people-container.active .message-container, #csr .csr-container.active .message-container, #story .story-container.active .message-container, #corporate-governance .corporate-governance-container.active .message-container, #leadership .leadership-container.active .message-container').length;  

    //calculate the number of pages we are going to have  

    var number_of_pages = Math.ceil(number_of_items/show_per_page);  

    //set the value of our hidden input fields  

    $('#current_page').val(0);  

    $('#show_per_page').val(show_per_page);  

    //now when we got all we need for the navigation let's make it '  



    /* 

    what are we going to have in the navigation? 

    - link to previous page 

    - links to specific pages 

    - link to next page 

    */  

    var navigation_html = '';  

    var current_link = 0;  

    while(number_of_pages > current_link){  

      navigation_html += '<a class="page_link" href="javascript:go_to_page(' + current_link +')" longdesc="' + current_link +'">'+ (current_link + 1) +'</a>';  

      current_link++;  

    }  



    $('#page_navigation').html(navigation_html);  



    //add active_page class to the first page link  

    $('#page_navigation .page_link:first').addClass('active_page');  



    //hide all the elements inside content div  

    $('#mtp .policyholder-container.active .message-container, #people .people-container.active .message-container, #csr .csr-container.active .message-container, #story .story-container.active .message-container, #corporate-governance .corporate-governance-container.active .message-container, #leadership .leadership-container.active .message-container').css('display', 'none');  



    //and show the first n (show_per_page) elements  

    $('#mtp .policyholder-container.active .message-container, #people .people-container.active .message-container, #csr .csr-container.active .message-container, #story .story-container.active .message-container, #corporate-governance .corporate-governance-container.active .message-container, #leadership .leadership-container.active .message-container').slice(0, show_per_page).css('display', 'block'); 

    // ------------------ end of testing ------------------

}



function go_to_page(page_num){



    // $('body, html').delay(500).animate({

    //     'scrollTop': $('.insidepage').offset().top

    // }, 300);


    $(window).scrollTop(0,0);


    //get the number of items shown per page  

    var show_per_page = parseInt($('#show_per_page').val());  



    //get the element number where to start the slice from  

    start_from = page_num * show_per_page;  



    //get the element number where to end the slice  

    end_on = start_from + show_per_page;  



    //hide all children elements of content div, get specific items and show them  

    $('#mtp .policyholder-container.active .message-container, #people .people-container.active .message-container, #csr .csr-container.active .message-container, #story .story-container.active .message-container, #corporate-governance .corporate-governance-container.active .message-container, #subsidiaries-governance .subsidiaries.active .message-container, #leadership .leadership-container.active .message-container').css('display', 'none').slice(start_from, end_on).css('display', 'block');  



    /*get the page link that has longdesc attribute of the current page and add active_page class to it 

    and remove that class from previously active page link*/  

    $('.page_link[longdesc=' + page_num +']').addClass('active_page').siblings('.active_page').removeClass('active_page');  



    //update the current page input field  

    $('#current_page').val(page_num);  

}  