// FullPage.js init
$(document).ready(function() {
	$('#fullpage').fullpage({
		//Navigation
		menu: '#menu',
		lockAnchors: false,
		anchors:['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['01', '02', '03', '04', '05', '06', '07', '08'],
		showActiveTooltip: true,
		slidesNavigation: false,
		slidesNavPosition: 'bottom',

		//Scrolling
		css3: true,
		scrollingSpeed: 700,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 1000,
		scrollBar: false,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		loopBottom: false,
		loopTop: false,
		loopHorizontal: true,
		continuousVertical: false,
		continuousHorizontal: false,
		scrollHorizontally: false,
		interlockedSlides: false,
		dragAndMove: true,
		offsetSections: false,
		resetSliders: false,
		fadingEffect: false,
		normalScrollElements: '#element1, .element2',
		scrollOverflow: false,
		scrollOverflowReset: false,
		scrollOverflowOptions: null,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: null,

		//Accessibility
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,

		//Design
		// controlArrows: true,
		verticalCentered: true,
		// paddingTop: '3em',
		// paddingBottom: '10px',
		// fixedElements: '#header',
		// responsiveWidth: 0,
		// responsiveHeight: 0,
		// responsiveSlides: false,
		// parallax: false,
		// parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

		//Custom selectors
		sectionSelector: '.section',
		slideSelector: '.slide',

		lazyLoading: true,

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	});
});

// ChiefSlider init
document.addEventListener('DOMContentLoaded', function() {
	new ChiefSlider('.slider', {
		loop: true,
		swipe: true,
		autoplay: true,
  		interval: 3000
	});
  });

  document.addEventListener('DOMContentLoaded', function() {
	new ChiefSlider('.slider-build', {
		loop: true,
		swipe: true,
		autoplay: false,
  		interval: 3000
	});
  });