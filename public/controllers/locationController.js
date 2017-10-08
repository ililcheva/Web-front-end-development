import { templates } from 'templates';
import 'bootstrap';
import { initMap } from 'mapController';
import { toggleMenu } from 'toggleController';

const locationController = () => {
  const data = firebase.database().ref('/');
  data.once('value')
    .then((snapshot) => {
      const root = snapshot.val();
      templates.getPage('location', root, '#main')
        .then(() => {
          $('section#main-header-section').removeAttr('id').attr('id', 'home-header-section').css("display", "");
          $('#main-footer').removeAttr('id').attr('id', 'home-footer')
          templates.getPage('main-header', {}, "#home-header-section")
            .then(() => {
              templates.getPage('main-footer', {}, "#home-footer")
                .then(() => {
                  toggleMenu();
                  initMap();
                });
            });
        });
    });
};

export { locationController };