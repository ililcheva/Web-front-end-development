import {templates} from 'templates';
import {homeController} from 'homeController';
import {locationController} from 'locationController';
import {menuController} from 'menuController';
import {postController} from 'postController';


const router = new Navigo(null, false, '#!');

router
    .on(() => menuController())
    .on({
        '/home': homeController,
        '/menu': menuController,
        '/location': locationController,
        '/menu/:id': postController
    })
    .notFound(() => templates.getPage('notFound', {}))
    .resolve();