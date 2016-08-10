(function ($) {
  jQuery(document).ready(function($){

    /**
    * Scroll to top
    */
    jQuery(function () {
      jQuery( '.back-to-top' ).click(function () {
        jQuery( 'body,html' ).animate({
          scrollTop: 0
        }, 800);
        return false;
      });
    });
    $(window).scroll(function() {
      if ( $(this).scrollTop() > 200 ) {
        $( '.back-to-top' ).fadeIn();
      } else {
        $( '.back-to-top' ).fadeOut();
      }
    });

    /**
    * Show more, show less
    */
    $( '.show-more-content' ).addClass( 'less' );
    $( '.show-more-link' ).click(function(e) {
      thisLink = $( this );
      if ( !thisLink.hasClass( 'more' ) ) {
        thisLink.toggleClass( 'more' );
        thisLink.text( 'Show less' );
      } else {
        thisLink.toggleClass( 'more' );
        thisLink.text( 'Show more' );
      }
      thisLink.parent().prev( '.show-more-content' ).toggleClass( 'less' );
      e.preventDefault();
    });

    // Wrap ampersands in span.ampersand
    $( 'p:contains('&')' ).each(function(){
      $( this ).html( $( this ).html().replace( /&amp;/, "<span class='ampersand'>&amp;</span>" ) );
    });

    $( 'table tr:nth-child(2n)' ).addClass( 'alt' );

  });
}(jQuery));
