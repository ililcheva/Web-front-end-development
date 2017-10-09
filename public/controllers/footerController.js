const footerController = (root) => {
    let recentComment = {};
    let allDishes = [];
    for(let index = 0; index < root.dishes.length; index += 1) {
        if(!index) {
          recentComment = root.dishes[index].comments[index];
        }
        if(index < 6) {
          allDishes.push(root.dishes[index].name);
        }
    }
    root.recentComment = recentComment;
    root.allDishes = allDishes;
}

export {footerController};