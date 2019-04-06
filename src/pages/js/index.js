var mainNav = $('#main-nav');
var hamburger = $('#hamburger');
var icon = $('.fa-bars');
var table = $('#table-relatorio');
var table = $('#tabela-dev');
var title = $('#title-table-dev');

hamburger.attr('data-click-state', 0);

mainNav.css({
    'top': '100%',
    'display': 'none'
    
});

icon.css({
    'background-color': '#28F250'

});

table.css({
    'padding-left': '20%'
});

title.css({
    'padding-left': '10%'
});

hamburger.click(function () {

    if (hamburger.attr('data-click-state') == '0') {

        console.log(0);

        $(this).attr('data-click-state', 1);
        mainNav.css({
            'display': 'block',
            'position': 'absolute'

        });
        icon.css({
            'background-color': '#2C4771'

        });
        table.css({
            'padding-left': '0%'
        });

        title.css({
            'padding-left': '5%'
        });


    } else {
        $(this).attr('data-click-state', 0);
        mainNav.css({
            'top': '100%',
            'display': 'none',
            'position': 'absolute'


        });
        icon.css({
            'background-color': '#28F250'

        });

        table.css({
            'padding-left': '20%'
        });

        title.css({
            'padding-left': '10%'
        });

        console.log(1);
    }
});
