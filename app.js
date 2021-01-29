class Accordion {
	constructor(element) {
		this.element = element;
		this.accordionopen(this.element);
		window.addEventListener('resize', onResize);
		window.addEventListener('orientationchange', onResize);

		function onResize() {
			let arr = [].slice.call(element.children);
			arr.forEach(function (tab) {
				if (tab.classList.contains('open')) {
					tab.nextElementSibling.classList.add('resize');
					tab.nextElementSibling.style.maxHeight = tab.nextElementSibling.scrollHeight + 'px';
				}
			});
		}
	}
	accordionopen(element) {
		element.addEventListener("click", function (e) {
			if (e.target.classList.contains('accordion-text')) {
				if (!e.target.classList.contains('open')) {
					e.target.nextElementSibling.classList.remove('resize');
					e.target.classList.add('open');
					e.target.nextElementSibling.style.maxHeight = e.target.nextElementSibling.scrollHeight + 'px';
				} else {
					e.target.nextElementSibling.classList.remove('resize');
					e.target.nextElementSibling.style.maxHeight = 0;
					e.target.classList.remove('open');
				}
			}
		});
	}
}

window.addEventListener("DOMContentLoaded", function () {
    new Accordion(document.querySelector('.accordion-container'));
})