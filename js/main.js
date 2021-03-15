$(document).ready(function(){
    //Isotope Fitlering
    var $btn=$('.fifth .button-group button');
    

    $btn.click(function(e){
        $('.fifth .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector=$(e.target).attr('data-filter');
        $('.fifth .grid').isotope({
            filter:selector
        });

        return false
    });

    $('#btn').trigger('click');

    // Magnefic Popup
    $('.popup').magnificPopup({
        type: 'image',
        gallery: {enabled: true}
      });
  
  });