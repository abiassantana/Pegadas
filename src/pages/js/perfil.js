var btnPer = $('#main-nav-none');
var menu = $('#main-nav');
var mainNav = $('#main-nav');


btnPer.attr('data-click-state', 0);

menu.css({
    'height': '45vh'

});


btnPer.click(function () {
    if (btnPer.attr('data-click-state') == '0') {
        console.log(0);
        // Perfil
        menu.css({
            'height': '100vh'

        });
        $(this).attr('data-click-state', 1);

    } else {
        $(this).attr('data-click-state', 0);
        // Perfil
        menu.css({
            'height': '45vh'

        });
        console.log(1);
    }
});
