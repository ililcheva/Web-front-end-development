$("#btn-mobile-nav").click(() => {
            $(".sub-menu").toggle();
            $(".sub-menu").on('click', (event) => {
                $(".sub-menu").toggle();
                $(".sub-menu").off('click');
            });
});