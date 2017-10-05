import { templates } from 'templates';
import 'bootstrap';

const menuController = () => {
    templates.getPage('menu', {},'#main');
};

export { menuController };