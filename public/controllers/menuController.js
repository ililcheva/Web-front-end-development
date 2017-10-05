import { templates } from 'templates';
import 'bootstrap';

const menuController = () => {
    const data = firebase.database().ref('/');
    data.once('value')
      .then((snapshot) => {
        const root = snapshot.val();
        templates.getPage('menu', root, '#main');
        console.log(root);
      });
};

export { menuController };