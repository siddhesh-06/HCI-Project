AOS.init({ duration: 500, easing: 'ease-in-out-quad' });

$(window).scroll(function () {
	if ($(window).scrollTop() > 400) {
		$('.navbar').addClass('new-nav navbar-dark');
	} else {
		$('.navbar').removeClass('new-nav navbar-dark');
		$('.navbar').addClass('navbar-light');
	}

	[
		'#mainpage',
		'#aboutcorona',
		'#symptoms',
		'#Prevention',
		'#news',
	].forEach((element) => {
		if ($(window).scrollTop() >= $(element).position().top - 300) {
			$('.navbar .nav-link').removeClass('active');
			$(`.navbar a[href="${element}"]`).addClass('active');
		}
	});
});

function navToggler(toggle) {
	if (toggle.getAttribute('class') == 'navbar-toggler-icon') {
		toggle.setAttribute('class', '');
		toggle.style.fontSize = '200%';
		toggle.innerHTML = '&times;';
	} else {
		toggle.innerHTML = '';
		toggle.style.fontSize = '100%';
		toggle.setAttribute('class', 'navbar-toggler-icon');
	}
}

document.querySelectorAll('.navbar-toggler').forEach((element) => {
	element.addEventListener('click', () => {
		if (window.innerWidth <= 767) {
			// as act like media query
			let toggle = element.children[0];
			navToggler(toggle);
		}
	});
});

document.querySelectorAll('.nav-item').forEach((element) => {
	element.addEventListener('click', () => {
		if (window.innerWidth <= 767) {
			let toggle = document.querySelector('.navbar-toggler').children[0];
			navToggler(toggle);
		}
	});
});

anime({
	targets: '#path5530',
	translateX: '20px',
	scale: [1, 1.04],
	direction: 'alternate',
	duration: 1500,
	loop: true,
	easing: 'linear',
});

anime({
	targets: '#aboutcorona img',
	keyframes: [{ translateY: '10' }, { translateY: '-10' }, { translateY: '0' }],
	easing: 'linear',
	loop: true,
	duration: 5000,
});





