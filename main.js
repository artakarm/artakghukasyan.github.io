
		$(window).on('scroll', function(){
			if($(window).scrollTop()) {
				$('header').addClass('bg')
			}else {
				$('header').removeClass('bg')

			}
		})


				
		$(window).on('scroll', function(){
			if($(window).scrollTop()) {
				$('.up_icon').addClass('up_top')
			}else {
				$('.up_icon').removeClass('up_top')

			}
		})

						// LATETS WORK

	const filterButtons = document.querySelector("#filter__buttons").children;
	const items = document.querySelector('.portfolio__gallery .container').children;


	for(let a=0; a<filterButtons.length; a++) {
		filterButtons[a].addEventListener('click',function(){
			for(let b = 0; b<filterButtons.length; b++){
				filterButtons[b].classList.remove('active')
			}
			this.classList.add('active')
			const target = this.getAttribute("data-target")


			for(let c =0;c<items.length; c++){
				items[c].style.display='none';
				if(target==items[c].getAttribute("data-id")){
					items[c].style.display='block';

				}
				if(target=="all") {
					items[c].style.display='block';

				}
			}
		})
	}


	const header = document.querySelector("header ul ").children;
	console.log(header)

	for(let d =0;d<header.length;d++){
		header[d].addEventListener('click',function(){
			for(let e =0;e<header.length;e++){
				header[e].classList.remove('active')
			}
			this.classList.add('active')
		})
	}