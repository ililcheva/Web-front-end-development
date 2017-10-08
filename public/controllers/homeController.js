import { templates } from 'templates';
import 'bootstrap';
import $ from 'jquery';
import { toggleMenu } from 'toggleController';
import { initMap } from 'mapController';

const homeController = () => {
    const data = firebase.database().ref('/');
    data.once('value')
        .then((snapshot) => {
            const root = snapshot.val();
            root.chefFaves = [];
            for (let i = 6; i < 9; i += 1) {
                root.chefFaves.push(root.dishes[i]);
            }
            templates.getPage('home', root, '#main')
                .then(() => {
                    $('section#home-header-section').removeAttr('id').attr('id', 'main-header-section');
                    $('#home-footer').removeAttr('id').attr('id', 'main-footer');
                    templates.getPage('home-header', {}, "#main-header-section")
                        .then(() => {
                            templates.getPage('home-footer', {}, "#main-footer")
                                .then(() => {
                                    toggleMenu();
                                    initMap();
                                })
                        });
                });
        });
    // templates.getPage('home', {}, 'body');
};

export { homeController };