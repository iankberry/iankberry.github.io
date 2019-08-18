(function($){
       $(window).on('load', function(){
           $.instagramFeed({
               'username': 'iankberry',
               'container': "#instagram",
               'display_profile': false,
               'display_biography': false,
               'display_gallery': true,
               'callback': null,
               'styling': false,
               'items': 12,
               'items_per_row': 4,
               'image_size': 320,
               'margin': 1
           });
       });
   })(jQuery);
