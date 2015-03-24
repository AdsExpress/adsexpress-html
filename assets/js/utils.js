utils = (function(){
  'use strict';

  return {
    initOwlCarousel : function($selector, custom){
      let defaults = {
        items : 4,
        navigation : false,
        pagination: false,
        autoPlay: true,
        stopOnHover: true,
        scrollPerPage: 4
      };

      let options = $.extend(defaults, custom);

      $selector.owlCarousel(options);
    }
  };
})();
