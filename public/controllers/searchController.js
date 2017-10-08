import { templates } from 'templates';
import 'bootstrap';

const search = (searchPhrase, data) => {
        data.once('value')
        .then((snapshot) => {
          const root = snapshot.val();
          let filteredDishes = [];
          filteredDishes.searchPhrase = searchPhrase;
          root.dishes.map((dish) => {
            if(dish.name.toLowerCase().indexOf(searchPhrase.toLowerCase()) !== -1) {
              filteredDishes.push(dish);
            }
          });
          templates.getPage('search', {filteredDishes: filteredDishes}, '#main');
        });
};

export {search};