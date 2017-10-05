import { templates } from 'templates';
import 'bootstrap';

const postController = () => {
    templates.getPage('post', {}, '#main');
};

export { postController };