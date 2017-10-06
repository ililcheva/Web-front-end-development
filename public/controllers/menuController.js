import { templates } from 'templates';
import 'bootstrap';

const menuController = () => {
  $('section#main-header-section').removeAttr('id').attr('id', 'home-header-section');
    const data = firebase.database().ref('/');
    data.once('value')
      .then((snapshot) => {
        const root = snapshot.val();
        templates.getPage('menu', root, '#main');
      });
};

export { menuController };