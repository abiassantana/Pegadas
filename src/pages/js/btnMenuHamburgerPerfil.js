//BTN do menu hamburger
var menuHamburgerBTN = $('#main-nav-none');
// menu hamburger
var menuMainNav = $('#main-nav');

//Start da var btn do menu hamburger
menuHamburgerBTN.attr('data-click-state', 0);

//CSS inicial do menu hamburguer
menuMainNav.css({
    'height': '45vh'

});

//Fuction para o tamanho do menu hamburguer
menuHamburgerBTN.click(function () {
    if (menuHamburgerBTN.attr('data-click-state') == '0') {
        console.log(0);
        // Perfil
        menuMainNav.css({
            'height': '100vh'

        });
        $(this).attr('data-click-state', 1);

    } else {
        $(this).attr('data-click-state', 0);
        // Perfil
        menuMainNav.css({
            'height': '45vh'

        });
        console.log(1);
    }
});
