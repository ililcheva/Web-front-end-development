import { templates } from 'templates';
import 'bootstrap';

const locationController = () => {
    templates.getPage('location', {}, '#main');
};

export { locationController };