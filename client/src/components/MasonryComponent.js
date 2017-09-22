/* Masonry Component
===================================================================================================================== */

import $ from 'jquery';
import Masonry from 'masonry-layout';
import ImagesLoaded from 'imagesloaded';

$(function() {
  
  $('.masonrycomponent').each(function() {
    
    // Initialise:
    
    var id = null;
    
    // Obtain Masonry Grid:
    
    var $grid = $(this).find('.masonry-grid');
    
    // Initialise Masonry and ImagesLoaded:
    
    var masonry = new Masonry($grid[0], $grid.data('masonry-config'));
    var imgLoad = new ImagesLoaded($grid[0]);
    
    // Perform Layout for each Image Load:
    
    imgLoad.on('progress', function() {
      masonry.layout();
    });
    
    // Detect Browser Resize:
    
    $(window).resize(function() {
      
      if (id !== null) {
        clearTimeout(id);
      }
      
      id = setTimeout(function(){
        masonry.layout();
      }, 500);
      
    });
    
  });
  
});
