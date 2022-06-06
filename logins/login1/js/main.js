$(document).ready(function(){

	/* Login & Signup Toggle */

	var cardToggle = 0;

	

$('.toggle-link').on('click', function(event){
    event.preventDefault();
		if(cardToggle == 0 ){
			$(this).text('Login');
			$('.login-box').animate({
				right: '350px'
			});
			$('.signup-box').animate({
				right: '0'
			});	

			cardToggle = 1;

		}else{
			$(this).text('Signup');
			$('.login-box').animate({
				right: '0'
			});
			$('.signup-box').animate({
				right: '-350px'
			});

			cardToggle = 0;
		}
	})
})