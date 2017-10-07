import { templates } from 'templates';
import 'bootstrap';

const postController = () => {
    $('section#main-header-section').removeAttr('id').attr('id', 'home-header-section');
  $('footer').removeAttr('id').attr('id', 'home-footer');
    const id = window.location.href.split('/')[5];
    const data = firebase.database().ref('/');
    let currentDish = {};
    data.once('value')
      .then((snapshot) => {
        const root = snapshot.val();
        for(const dish of root.dishes) {
            if(dish.id === id) {
                currentDish = dish;
                currentDish.nameToUpperCase = currentDish.name.toUpperCase();
                if(!currentDish.comments) {
                    currentDish.comments = [];
                }
            }
        }
        console.log(currentDish);
        templates.getPage('post', {currentDish: currentDish}, '#main');
      });
    templates.getPage('post', {}, '#main');
};

export { postController };