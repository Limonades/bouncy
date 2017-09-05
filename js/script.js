
; (function ($) {
        "use strict";
        $(document).ready(function () {
            $(window).on('load', function () {


            // ............................ISOTOPE..........................

            var $grid = $('.grid').isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.grid-item'
                }
            });

            $('.filter-button-group').on( 'click', 'button', function() {
              var filterValue = $(this).attr('data-filter');
              // use filter function if value matches
              filterValue = filterValue;
              $('.grid').isotope({ filter: filterValue });
            });


            // change is-checked class on buttons
            $('.button-group').each( function( i, buttonGroup ) {
              var $buttonGroup = $( buttonGroup );
              $buttonGroup.on( 'click', 'button', function() {
                $buttonGroup.find('.main__works__link--active').removeClass('main__works__link--active');
                $( this ).addClass('main__works__link--active');
              });
            });

            // .........................END ISOTOPE..........................

            // ............................SLICK.............................
            

            $('.team__slider').slick({
              arrows: false,
              dots: true,
            });

            $('.testimonials__slider').slick({
              arrows: false,
              dots: true,
                infinite: true,
                speed: 1000,
                fade: true,
                cssEase: 'linear',
                autoplay: true,
                autoplaySpeed: 4000,
                adaptiveHeight: true
            });


            // ...........................END SLICK..........................


            // ...........................SCROLL.............................

            // Select all links with hashes
            $('a[href*="#"]')
              // Remove links that don't actually link to anything
              .not('[href="#"]')
              .not('[href="#0"]')
              .click(function(event) {
                // On-page links
                if (
                  location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
                  && 
                  location.hostname == this.hostname
                ) {
                  // Figure out element to scroll to
                  var target = $(this.hash);
                  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                  // Does a scroll target exist?
                  if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                      scrollTop: target.offset().top
                    }, 1000, function() {
                      // Callback after animation
                      // Must change focus!
                      var $target = $(target);
                      $target.focus();
                      if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                      } else {
                        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                      };
                    });
                  }
                }
              });
            });



           // ...........................END SCROLL.............................

           // ...........................FIXED NAV.............................


            var navPos;
            var winPos;

            function refreshVar() {
              navPos = $('.header__nav').offset().top;            
            }

            refreshVar();
            $(window).resize(refreshVar);

            $(window).scroll(function() {
              winPos = $(window).scrollTop();

            if (winPos >= navPos) {
              $('.header__nav').addClass('header__nav--fixed');
              $('.header__nav__item-link').removeClass('header__nav__item-link--active');
            } else {
              $('.header__nav').removeClass('header__nav--fixed');
            }
              
            });


           // ...........................END FIXED NAV..........................


    }); 
})(jQuery);

// .....................................MAP...................................


function initMap() {
    var uluru = {lat: 46.4786795, lng: 30.722946};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: uluru,
      disableDefaultUI: true
    });

    var marker = new google.maps.Marker({
      position: uluru,
      map: map,
      icon: 'img/favicon.png',
    });

    var infowindow = new google.maps.InfoWindow({
      content: 'Beetroot Academy',
    });

    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });

    google.maps.event.addDomListener(window, 'resize', function() {
      var uluru = map.getCenter();
      google.maps.event.trigger(map, 'resize');
      map.setCenter(uluru);
    })
}

// .................................END MAP...................................