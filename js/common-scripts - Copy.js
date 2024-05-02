
(function($){
	$(function(){


        $('.phone-nav').click(function () {
            $("body").toggleClass("navShown");
            $(".nav-wrap").fadeToggle()
        });



        // Phone nav click function
      /*  $('.menu-icon-wrap').click(function () {
            $("body").toggleClass("navShown");
            $(".nav-wrap").fadeIn()
        });*/

        

// // Function to add "head shake" animation
// function addHeadShakeAnimation() {
//     var heroThumb = document.getElementById('heroThumb');
//     heroThumb.style.animation = 'shake 1s';
// }

// // Call the function to add the animation
// addHeadShakeAnimation();

        



// Function to add "head shake" animation
function addHeadShakeAnimation() {
    var heroThumb = document.getElementById('heroThumb');
    heroThumb.style.animation = 'shake 1s';
}

// Call the function to add the animation
addHeadShakeAnimation();

// Function to add "head shake" animation when the section comes into view
function addIntersectionObserverAnimation(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            var thumbBanner = document.getElementById('heroThumb1');
            thumbBanner.classList.add('head-shake');
        }
    });
}

// Set up the Intersection Observer
const options = {
    threshold: 0.5 // Trigger animation when at least 50% of the element is visible
};

const observer = new IntersectionObserver(addIntersectionObserverAnimation, options);
const findUsBanner = document.getElementById('find-us-banner');
observer.observe(findUsBanner);



$(window).scroll(function() {
    var windowTop = $(window).scrollTop();
    var windowBottom = windowTop + $(window).height();
    
    $('.chug-flavour-item').each(function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        if ((elementTop <= windowBottom) && (elementBottom >= windowTop)) {
            $(this).addClass('slideFade');
        }
    });
});


		
	})// End ready function.
   
   
 // text animation
function addAnimation(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            var h2Element = document.querySelector('.anim-text');
            h2Element.classList.add('active');
        }
    });
}

// Set up the Intersection Observer
const options1 = {
    threshold: 0.1 // Trigger animation when at least 10% of the element is visible
};

const observer1 = new IntersectionObserver(addAnimation, options1);
const hillStation = document.querySelector('.hill-station, .ciders-hero, .about-hero');
observer1.observe(hillStation);



// Function to add fade-in animation when the section comes into view
function addTextFadeInAnimation(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            var content = document.querySelector('.text-fadeIN');
            content.classList.add('fade-in');
        }
    });
}

// Set up the Intersection Observer
const options2 = {
    threshold: 0.5 // Trigger animation when at least 50% of the element is visible
};

const observer2 = new IntersectionObserver(addTextFadeInAnimation, options2);
const vacationContent = document.querySelector('.text-fadeIN');
observer2.observe(vacationContent);





// Image fadein

// Function to add fade-in animation when the section comes into view
function addFadeInAnimation(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            var bottomImg = document.querySelector('.fadein-icon');
            bottomImg.classList.add('fadein');
            observer.unobserve(entry.target); // Stop observing after animation is triggered once
        }
    });
}

// Set up the Intersection Observer
const options3 = {
    threshold: 0.5 // Trigger animation when at least 50% of the element is visible
};

const observer3 = new IntersectionObserver(addFadeInAnimation, options3);
const bottomImg = document.querySelector('.fadein-icon');
observer3.observe(bottomImg);










})(jQuery)

