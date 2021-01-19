document.addEventListener('DOMContentLoaded', function () {
	new Splide('#image-slider, #project-slider', {
    type   : 'loop',
    perPage: 6,
    perMove: 1,
    autoplay: true,
    lazyLoad: 'nearby',
    pagination  : false
  }).mount();
});

document.addEventListener('DOMContentLoaded', function () {
	new Splide('#project-slider', {
    type  : 'fade',
    rewind: true,
    perPage: 1,
    perMove: 1,
    autoplay: true,
    lazyLoad: 'nearby',
    pagination  : false
  }).mount();
});