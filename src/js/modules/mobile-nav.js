function mobileNav() {
	// Header-top

	// const navIcon = document.querySelector('.nav-icon');
	// const nav = document.querySelector('.nav');
	// const hed = document.querySelector('.header__nav-list');

	// navIcon.addEventListener('click',function(){
	// 	this.classList.toggle('nav-icon--active');
	// 	nav.classList.toggle('nav--active');
	// 	hed.classList.toggle('none');
	// });


	// закрытие меню для прокрутки до нужной секции
	// const navLinks = document.querySelectorAll('.nav a');

	// navLinks.forEach(function (item) {
	// 	item.addEventListener('click',function(){
	// 		nav.classList.remove('nav--active');
	// 		navIcon.classList.remove ('nav-icon--active');
	// 		hed.classList.remove('none');
	// 	})
	// });

	const headerNav = document.querySelector(".header__nav");
    const navStart = 50;
	window.addEventListener ('scroll' , navOnScroll);
	function navOnScroll (params) {
	if (scrollY > navStart) {
		headerNav.classList.add('active');
	} else {
		headerNav.classList.remove('active');
	}
}
    


	// Header

	const navMenu = document.querySelector('#nav-icon');
	console.log(navMenu);
	const navHead = document.querySelector('#nav');
	console.log(navHead);
	const heding = document.querySelector('#header__nav-list');
	console.log(heding);

	navMenu.addEventListener('click',function(){
		console.log(555);
		this.classList.toggle('nav-icon--active');
		navHead.classList.toggle('nav--active');
		heding.classList.toggle('none');
	});


	// закрытие меню для прокрутки до нужной секции
	const navL = document.querySelectorAll('.nav__a');
	console.log(navL);

	navL.forEach(function (item) {
		item.addEventListener('click',function(){
			navHead.classList.remove('nav--active');
			navMenu.classList.remove ('nav-icon--active');
			heding.classList.remove('none');
		})
	})


	document.querySelector('.btn-up').onclick = () => {
		// переместим в начало страницы
		window.scrollTo({
		  top: 0,
		  left: 0,
		  behavior: 'smooth'
		})};

}


export default mobileNav;