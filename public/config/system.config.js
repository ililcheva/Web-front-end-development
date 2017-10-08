SystemJS.config({
    "transpiler": "plugin-babel",
    "map": {
        //SystemJS files\\
        "plugin-babel": "../node_modules/systemjs-plugin-babel/plugin-babel.js",
        "systemjs-babel-build": "../node_modules/systemjs-plugin-babel/systemjs-babel-browser.js",

        //App files\\
        "index": "../app-modules/index.js",
        "templates": "../app-modules/templates.js",
        "homeController": "../controllers/homeController.js",
        "locationController": "../controllers/locationController.js",
        "menuController": "../controllers/menuController.js",
        "postController": "../controllers/postController.js",
        "searchController": "../controllers/searchController.js",
        "toggleController": "../controllers/toggleController.js",
        "mapController": "../controllers/mapController.js",

        //Libraries\\
        "jquery": "../node_modules/jquery/dist/jquery.js",
        //Routing:
        "navigo": "../node_modules/navigo/lib/navigo.min.js",
        //HTML:
        "handlebars": "../node_modules/handlebars/dist/handlebars.js",
        //Popup messages
        "toastr": "../node_modules/toastr/toastr.js",

        //UI stuffs (autocomplete, calendar etc.)
        "jqueryUi": "../node_modules/jquery-ui-dist/jquery-ui.js",
        "bootstrap": "node_modules/bootstrap/dist/js/bootstrap.min.js"
    }
});