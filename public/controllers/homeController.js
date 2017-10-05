import { templates } from 'templates';
import 'bootstrap';

const homeController = () => {
    $('#main-header-section').hide();
    $('#main-footer').hide();
    $('#main').hide();
    const data = firebase.database().ref('/');
    data.once('value')
      .then((snapshot) => {
        const root = snapshot.val();
        root.chefFaves = [];
        for(let i = 0; i < 3; i+=1){
            const index = Math.floor(Math.random() * 11) + 1;
            root.chefFaves.push(root.dishes[index]);
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