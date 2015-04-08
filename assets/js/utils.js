var _config = {};

utils = (function(config, $){
  'use strict';

  return {
    // startup application
    init : function(){
      $('#burger-menu').click(function(){
        $(this).toggleClass('open');
        $('.burger-menu').toggleClass('open');
      });
    },

    initOwlCarousel : function($selector, custom){
      var defaults = {
        items : 4,
        navigation : false,
        pagination: false,
        autoPlay: true,
        stopOnHover: true,
        scrollPerPage: 4
      };

      var options = $.extend(defaults, custom);

      $selector.owlCarousel(options);
    }
  };
})(_config, window.jQuery);
