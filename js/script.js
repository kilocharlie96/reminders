(function($){
    var button = $('nav a')

    button.on('click', function(){
        var classa = $(this).attr('class'),
            h1 = $('h1.' + classa);

            h1.show();

            h1.siblings().hide();

    });

})(jQuery);