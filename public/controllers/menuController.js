import { templates } from 'templates';
import 'bootstrap';
import $ from 'jquery';
import { search } from 'searchController';
import { toggleMenu } from 'toggleController';
import { footerController } from 'footerController';

const menuController = () => {
  const data = firebase.database().ref('/');
  data.once('value')
    .then((snapshot) => {
      const root = snapshot.val();
      templates.getPage('menu', root, '#main')
        .then(() => {
          $('section#main-header-section').removeAttr('id').attr('id', 'home-header-section').css("display", "");
          $('#main-footer').removeAttr('id').attr('id', 'home-footer').css("display", "");
          templates.getPage('main-header', {}, "#home-header-section")
            .then(() => {
              footerController(root);
              templates.getPage('main-footer', root, "#home-footer")
                .then(() => {
                  toggleMenu();
                  $('.search-button').click(() => {
                    const searchPhrase = $('.search-input').val();
                    search(searchPhrase, data);
                  });
                });
            });
        });
    });
};

export { menuController };