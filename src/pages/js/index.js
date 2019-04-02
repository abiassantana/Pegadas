var mainNav = $('#main-nav');
var hamburger = $('#hamburger');
var icon = $('.fa-bars');

hamburger.attr('data-click-state', 0);

mainNav.css({
    'top': '100%'
});

icon.css({
    'background-color': '#28F250'

});

hamburger.click(function () {

    if (hamburger.attr('data-click-state') == '0') {

        console.log(0);

        $(this).attr('data-click-state', 1);
        mainNav.animate({
            'opacity': '0'

        });
        icon.css({
            'background-color': '#2C4771'

        });

    } else {
        $(this).attr('data-click-state', 0);
        mainNav.animate({
            'top': '100%',
            'opacity': '1'


        });
        icon.css({
            'background-color': '#28F250'

        });
        console.log(1);
    }
});
