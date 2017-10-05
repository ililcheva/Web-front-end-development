import 'jquery';

const templates = (function() {
    function getPage(pageName, data, selector) {
        const url = `templates/${pageName}.handlebars`;
        return $.get(url, function(html) {
            const hbTemplate = Handlebars.compile(html.toString());
            $(selector).html(hbTemplate(data));
        });
    }

    return {
        getPage: getPage
    };
}());

export { templates };