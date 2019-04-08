//Menu nav
var menuMainNav = $('#main-nav');
var menuHamburger = $('#hamburger');
var iconMenuHamburguer = $('.fa-bars');
//Tabela Relatorio
var tableRelatorio = $('#table-relatorio');
//Tabela Desenvolvor
var tableDesenvolvedor = $('#tabela-dev');
var titleDesenvolvedor = $('#title-table-dev');


//Start var menuHamburger == 0
menuHamburger.attr('data-click-state', 0);

// CSS inicial menu hamburger

menuMainNav.css({
    'top': '100%',
    'display': 'none'

});

iconMenuHamburguer.css({
    'background-color': '#28F250'

});

// CSS inicial tabela relatorio

tableRelatorio.css({
    'padding-left': '0%'
});

//CSS inicial tabela desenvolvedor

tableDesenvolvedor.css({
    'padding-left': '20%'
});

titleDesenvolvedor.css({
    'padding-left': '10%'
});


// Function click para o menu hamburger
menuHamburger.click(function () {

    // Verificacao se menu hamburger é igual a 0 ou igual 1 (true, false)
    if (menuHamburger.attr('data-click-state') == '0') {

        console.log(0);

        //Alterando valor da var hamburger para 1
        $(this).attr('data-click-state', 1);

        // CSS  menu hamburger
        menuMainNav.css({
            'display': 'block',
            'position': 'absolute'

        });
        iconMenuHamburguer.css({
            'background-color': '#2C4771'

        });

        // CSS tabela desenvolvedor
        tableDesenvolvedor.css({
            'padding-left': '20%'
        });

        titleDesenvolvedor.css({
            'padding-left': '10%'
        });

        // CSS tabela relatorio
        tableRelatorio.css({
            'padding-left': '20%'
        });

    } else {
        //Alterando valor da var hamburger para 0
        $(this).attr('data-click-state', 0);

        // CSS secundario  menu hamburger
        menuMainNav.css({
            'top': '100%',
            'display': 'none',
            'position': 'absolute'
        });

        iconMenuHamburguer.css({
            'background-color': '#28F250'

        });

        // CSS secundario tabela desenvolvedor
        tableDesenvolvedor.css({
            'padding-left': '0%'
        });

        titleDesenvolvedor.css({
            'padding-left': '5%'
        });

        // CSS secundario tabela relatorio
        tableRelatorio.css({
            'padding-left': '0%'
        });

        console.log(1);
    }
});
