import { templates } from 'templates';
import 'bootstrap';

const homeController = () => {
    $('#main-header-section').hide();
    $('#main-footer').hide();
    $('#main').hide();
    templates.getPage('home', {}, 'body');
    $("#btn-mobile-nav").click(() => {
            $(".sub-menu").toggle();
            $(".sub-menu").on('click', (event) => {
                $(".sub-menu").toggle();
                $(".sub-menu").off('click');
            });
    });
};

export { homeController };