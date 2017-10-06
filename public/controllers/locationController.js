import { templates } from 'templates';
import 'bootstrap';

const locationController = () => {
    $('section#main-header-section').removeAttr('id').attr('id', 'home-header-section');
    const data = firebase.database().ref('/');
    data.once('value')
      .then((snapshot) => {
        const root = snapshot.val();
        templates.getPage('location', root, '#main');
      });
};

export { locationController };