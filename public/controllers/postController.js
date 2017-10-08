import { templates } from 'templates';
import 'bootstrap';
import { toggleMenu } from 'toggleController';
import { search } from 'searchController';
import $ from 'jquery';

const postController = () => {
    const id = window.location.href.split('/')[5];
    const data = firebase.database().ref('/');
    let currentDish = {};
    data.once('value')
        .then((snapshot) => {
            const root = snapshot.val();
            for (const dish of root.dishes) {
                if (dish.id === id) {
                    currentDish = dish;
                    currentDish.nameToUpperCase = currentDish.name.toUpperCase();
                    if (!currentDish.comments) {
                        currentDish.comments = [];
                    }
                }
            }
            templates.getPage('post', { currentDish: currentDish }, '#main')
                .then(() => {
                    $('section#main-header-section').removeAttr('id').attr('id', 'home-header-section').css("display", "");
                    $('#main-footer').removeAttr('id').attr('id', 'home-footer').css("display", "");
                    templates.getPage('main-header', {}, "#home-header-section")
                        .then(() => {
                            templates.getPage('main-footer', {}, "#home-footer")
                                .then(() => {
                                    toggleMenu();
                                    $('.search-button').on('click', (event) => {
                                        const searchPhrase = $('.search-input').val();
                                        search(searchPhrase, data);
                                    });
                                });
                        });
                });
        });
};

export { postController };