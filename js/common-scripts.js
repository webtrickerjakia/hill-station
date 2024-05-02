
(function($){
	$(function(){


        $('.phone-nav').click(function () {
            $("body").toggleClass("navShown");
            $(".nav-wrap").fadeToggle()
        });


        // Age gate

        // overAge = function () {
        //     $('#age-verify').addClass('hidden');
        //   }
          
        //   underAge = function () {
        //     $('#age-verify').addClass('under');
        //   }
          
        //   goBack = function () {
        //       window.history.back();
        //   }  


        if ($('select').length) {
            $('select').selectric({
                disableOnMobile: false,
                nativeOnMobile: false
            });
        }


// map tab

        $('.map').not(':first').hide();
    
        // Function to handle click event of "View on Map" buttons
        $('.viewmaplink').on('click', function() {
            // Hide all map containers
            $('.map').hide();
            
            // Extract the target map id from the clicked button's data-target attribute
            var targetMapId = $(this).data('target');
            
            // Show the map container corresponding to the targetMapId
            $('#' + targetMapId).show();
        });


// seacrhing :

// JavaScript for filtering location items based on search input
// document.getElementById('locationName').addEventListener('input', function () {
//     filterLocations();
// });

// function filterLocations() {
//     let input, filter, locations, locationItem, i, txtValue;
//     input = document.getElementById('locationName');
//     filter = input.value.toUpperCase();
//     locations = document.querySelectorAll('.csl-list-item');

//     locations.forEach(location => {
//         locationItem = location.querySelector('h4');
//         txtValue = locationItem.textContent || locationItem.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             location.style.display = '';
//         } else {
//             location.style.display = 'none';
//         }
//     });
// }


         // Function to show dropdown based on search input
         function showDropdown() {
            var input, filter, dropdown, locations, i, txtValue;
            input = document.getElementById("locationName");
            filter = input.value.toUpperCase();
            dropdown = document.getElementById("locationDropdown");
            locations = document.querySelectorAll(".location-near-you-box");

            // Clear previous dropdown items
            dropdown.innerHTML = "";

            // Display matching locations in dropdown
            locations.forEach(function(location) {
                var locationName = location.innerText.toUpperCase();
                if (locationName.includes(filter)) {
                    var dropdownItem = document.createElement("div");
                    dropdownItem.innerText = location.innerText;
                    dropdownItem.classList.add("dropdown-item");
                    dropdownItem.addEventListener("click", function() {
                        input.value = location.innerText;
                        filterLocations();
                        dropdown.style.display = "none";
                    });
                    dropdown.appendChild(dropdownItem);
                }
            });

            // Show or hide the dropdown
            dropdown.style.display = filter === "" ? "none" : "block";
        }

        // Function to filter locations based on search and selected location
        function filterLocations() {
            var selectedLocation = $("#store-category").val();
            var searchInput = $("#locationName").val().toUpperCase();
            $(".csl-list-item").each(function() {
                var locationName = $(this).find("h4").text().toUpperCase();
                if (locationName.includes(searchInput) && (!selectedLocation || $(this).hasClass(selectedLocation))) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        }

        // Event listener for search input
        $("#locationName").on("keyup", function() {
            showDropdown();
        });

        // Event listener for search button
        $("#locationSearchForm").submit(function(event) {
            event.preventDefault();
            filterLocations();
        });

        // Event listener for select location dropdown
        $("#store-category").on("change", function() {
            filterLocations();
        });


       // Event listener for reset button
document.getElementById("resetButton").addEventListener("click", function() {
    resetForm();
});

// Function to reset form and reload page
function resetForm() {
    // Reset the form
    document.getElementById("locationSearchForm").reset();

    // Reload the page
    location.reload();
}



// // সার্চ বক্সে লিখা দেখার জন্য ড্রপডাউন দেখানো
// function showDropdown() {
//     var input, filter, ul, li, a, i;
//     input = document.getElementById("locationName");
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("locationDropdown");
//     li = ul.getElementsByTagName("div");
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("h4")[0];
//         if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
//     ul.style.display = "block"; // ড্রপডাউন দেখানো
// }

// // লোকেশন সিলেক্ট করা এবং সার্চ বাটন ক্লিক করা


// function filterLocations() {
//     var input, filter, ul, li, a, i;
//     input = document.getElementById("locationName");
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("locations-near-you");
//     li = ul.getElementsByClassName("csl-list-item");
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("h4")[0]; // Change this line
//         if (a.innerText.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }

// // রিসেট বাটন ক্লিক করা
// function resetForm() {
//     document.getElementById("locationSearchForm").reset();
//     var locationResults = document.getElementById("locationResults");
//     var allLocations = locationResults.getElementsByClassName("csl-list-item");
//     for (var i = 0; i < allLocations.length; i++) {
//         allLocations[i].style.display = "";
//     }
// }

// // সার্চ বাটন এবং রিসেট বাটনের ইভেন্ট হ্যান্ডলিং
// document.getElementById("locationSearchForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // ফর্ম সাবমিট প্রথমে পৃষ্ঠা রিলোড না হওয়ার জন্য
//     filterLocations();
// });

// document.getElementById("resetButton").addEventListener("click", function() {
//     resetForm();
// });


// document.getElementById("searchButton").addEventListener("click", function(event) {
//     event.preventDefault(); // ফর্ম সাবমিট প্রথমে পৃষ্ঠা রিলোড না হওয়ার জন্য
//     filterLocations();
// });







// text animation

var $animation_elements = $('.animation-element');
var $window = $(window);
var animation_triggered = false; // Flag to track animation trigger
var last_scroll_top = 0;

function check_if_in_view() {
    var window_top_position = $window.scrollTop();
    var window_height = $window.height();

    $.each($animation_elements, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = element_top_position + element_height;

        // Check if the element is in the viewport and the user is scrolling down
        if (element_bottom_position >= window_top_position && element_top_position <= window_top_position + window_height && window_top_position > last_scroll_top) {
            $element.addClass('in-view');
            if (!animation_triggered) {
                animation_triggered = true;
            }
        } else {
            // If animation has not been triggered yet, keep the animation class applied
            if (!animation_triggered) {
                $element.removeClass('in-view');
            }
        }
    });

    last_scroll_top = window_top_position;
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll', check_if_in_view);




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





var ageVerified = localStorage.getItem('ageVerified');
  
// Check if the modal should be shown
if (!ageVerified) {
  $('#age-verify').removeClass('hidden');
} else {
  $('#age-verify').css('display', 'none');
}

// Event handler for "Yes" button
$('#age-verify .window button.yes').on('click', function() {
  $('#age-verify').addClass('hidden');
  localStorage.setItem('ageVerified', 'true');
});

// Event handler for "No" button
$('#age-verify .window button.no').on('click', function() {
  $('#age-verify').addClass('under');
});

// Event handler for going back
$('#age-verify .window button.back').on('click', function() {
  window.history.back();
});



})(jQuery)

