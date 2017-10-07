import { templates } from 'templates';
import 'bootstrap';

const homeController = () => {
    $('#home-header-section').hide();
    $('#home-footer').hide();
    const data = firebase.database().ref('/');
    data.once('value')
      .then((snapshot) => {
        const root = snapshot.val();
        root.chefFaves = [];
        for(let i = 6; i < 9; i+=1){
            root.chefFaves.push(root.dishes[i]);
        }
        templates.getPage('home', root, 'body');
        console.log(root);
      });
    // templates.getPage('home', {}, 'body');
    $("#btn-mobile-nav").click(() => {
            $(".sub-menu").toggle();
            $(".sub-menu").on('click', (event) => {
                $(".sub-menu").toggle();
                $(".sub-menu").off('click');
            });
    });
};

export { homeController };