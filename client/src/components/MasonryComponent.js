/* Masonry Component
===================================================================================================================== */

import $ from 'jQuery';
import Masonry from 'masonry-layout';
import ImagesLoaded from 'imagesloaded';

$(function() {
  
  $('.masonrycomponent').each(function() {
    
    // Obtain Masonry Grid:
    
    var $grid = $(this).find('.masonry-grid');
    
    // Initialise Masonry and ImagesLoaded:
    
    var masonry = new Masonry($grid[0], $grid.data('masonry-config'));
    var imgLoad = new ImagesLoaded($grid[0]);
    
    // Perform Layout for each Image Load:
    
    imgLoad.on('progress', function() {
      masonry.layout();
    });
    
  });
  
});
