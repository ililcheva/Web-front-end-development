import { templates } from 'templates';
import 'bootstrap';
import { initMap } from 'mapController';
import { toggleMenu } from 'toggleController';
import { search } from 'searchController';
import { footerController } from 'footerController';
import $ from 'jquery';

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
              footerController(root);
              templates.getPage('main-footer', root, "#home-footer")
                .then(() => {
                  toggleMenu();
                  initMap();
                  $('.search-button').on('click', (event) => {
                    const searchPhrase = $('.search-input').val();
                    search(searchPhrase, data);
                  });
                });
            });
        });
    });
};

export { locationController };