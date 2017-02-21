/**
 * Created by Cynthia on 20/02/2017.
 */
const routes = require('express').Router();
var js = require('../public/js/scripts');
var lang;
var commons = {};
// var obj = {};

routes.get('/*', function(request, response, next){
    //it prevents double preparation if request comes from language change
    if (js.validRoute(request.url) && js.getLanguages().indexOf(request.url.replace('/','')) < 0){
        console.log('calling preparation from /*');
        console.log(request.url);
        prepare(request);
    }
    next();
});
routes.get('/', function (request, response) {
    response.render('pages/index', getLocals({
        slideshows: [
            {
                divClass: 'item active',
                imgSrc: 'images/slideshow/slide01.jpg',
                imgAlt: 'first slide',
                caption: js.getObj().__('caption1')
            },
            {
                divClass: 'item',
                imgSrc: 'images/slideshow/slide02.jpg',
                imgAlt: 'second slide',
                caption: js.getObj().__('caption2')
            },
            {
                divClass: 'item',
                imgSrc: 'images/slideshow/slide03.jpg',
                imgAlt: 'third slide',
                caption: js.getObj().__('caption3')
            },
            {
                divClass: 'item',
                imgSrc: 'images/slideshow/slide04.jpg',
                imgAlt: 'fourth slide',
                caption: js.getObj().__('caption4')
            },
            {
                divClass: 'item',
                imgSrc: 'images/slideshow/slide05.jpg',
                imgAlt: 'fifth slide',
                caption: js.getObj().__('caption5')
            },
            {
                divClass: 'item',
                imgSrc: 'images/slideshow/slide06.jpg',
                imgAlt: 'sixth slide',
                caption: js.getObj().__('caption6')
            }
        ],
        commitment: {title: js.getObj().__('commitment.title'),
            text: js.getObj().__('commitment.text')},
        alliances: js.getObj().__('business.alliances'),
        contentManagement: js.getObj().__('content.management'),
        readMore: js.getObj().__('read.more'),
        products: js.getObj().__('products'),
        content: js.getObj().__('content'),
        portal: js.getObj().__('portal'),
        sites: js.getObj().__('sites'),
        cloud: js.getObj().__('cloud')
    }));
});

routes.get('/conocenos', function (request, response) {
    response.render('pages/conocenos', getLocals({title: js.getObj().__('nav.know.us'),
        showSections:{
            about:true
        }}));
});
routes.get('/conocenos/acerca', function (request, response) {
    response.render('pages/conocenos', getLocals({title: js.getObj().__('nav.know.us'),
        showSections:{
            about:true
        }}));
});
routes.get('/conocenos/filosofia', function (request, response) {
    response.render('pages/conocenos', getLocals({title: js.getObj().__('nav.know.us'),
        showSections:{
            philosophy:true
        }}));
});
routes.get('/conocenos/trayectoria', function (request, response) {
    response.render('pages/conocenos', getLocals({title: js.getObj().__('nav.know.us'),
        showSections:{
            background:true
        }}));
});
routes.get('/conocenos/trabajo', function (request, response) {
    response.render('pages/conocenos', getLocals({title: js.getObj().__('nav.know.us'),
        showSections:{
            working:true
        }}));
});
routes.get('/conocenos/alianzas', function (request, response) {
    response.render('pages/conocenos', getLocals({title: js.getObj().__('nav.know.us'),
        showSections:{
            allies:true
        }}));
});

routes.get('/contacto', function (request, response) {
    response.render('pages/contacto', getLocals({title: 'CONTACTO'}));
});
routes.get('/servicios', function (request, response) {
    response.render('pages/servicios', getLocals({title: 'SERVICIOS'}));
});

//resolves language
var setLanguage = function(request){
    lang = js.resolveLanguage(request);
}
//sets lang var and common locals
var prepare = function(request){
    //checks if lang var is set. If not, it resolves it
    if (!lang){
        setLanguage(request);
    }
    js.getTranslator().setLocale(request, lang);
    commons = {menu: { home: js.getObj().__('nav.home'),
        know: js.getObj().__('nav.know.us'),
        know_about: js.getObj().__('nav.know.us.about'),
        know_philosophy: js.getObj().__('nav.know.us.philosophy'),
        know_background: js.getObj().__('nav.know.us.background'),
        know_working: js.getObj().__('nav.know.us.working'),
        know_allies: js.getObj().__('nav.know.us.allies'),
        services: js.getObj().__('nav.services'),
        contact: js.getObj().__('nav.contact.us')},
        dropDown: {selected: js.getSelectedLang(),
            nonSelected: js.getNonSelectedLang()}};
}
//adds commons to locals
var getLocals = function(locals){
    locals.menu = commons.menu;
    locals.dropDown = commons.dropDown;

    return locals;
}

routes.get('*/es', function (request, response) {
    response.cookie('lang','es',{});
    setLanguage({cookies: {lang:'es'}});
    response.redirect(request.url.replace('es', ''));
});
routes.get('*/en', function (request, response) {
    response.cookie('lang','en',{});
    setLanguage({cookies:{lang:'en'}});
    response.redirect(request.url.replace('en', ''));
});


module.exports = routes;

