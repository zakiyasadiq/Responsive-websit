
jQuery(document).ready(function(){

    "user strict"
    $('.slider').ripples({
        dropRadius: 5,
        perturbance: 0.01,
        
      });

      $('.work').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
          enabled: true
        }
      });

      $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 750,
        loop: true,
        autoplayHoverPause: true,
          responsive:{
          0:{
            items: 1
          },

          480:{
            items: 2
          },

          768:{
            items: 3
          }
        }
      });


})