// delete process.env["DEBUG_FD"];
var express = require('express');
var favicon = require('serve-favicon');
var path = require("path");
var i18n = require('i18n');
// var $ = require('jquery')(require("jsdom").jsdom().defaultView);

var cookieParser = require('cookie-parser');
var js = require('./public/js/scripts');
var obj = {};

i18n.configure({
    locales: ['en', 'es'],
    register: obj,
    directory: __dirname + '/locales'
});

var app = express();
app.use(cookieParser());
app.use(i18n.init);

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
// change the rendering engine 
app.set('view engine', 'ejs');

// passing to express the template index.js to solve first page.
app.get('/', function (request, response) {
    var lang = js.resolveLanguage(request.cookies);
    i18n.setLocale(request, lang);

    response.render('pages/index', {
        slideshows: [
            {
                divClass: 'item active',
                imgSrc: 'images/slideshow/slide01.jpg',
                imgAlt: 'first slide',
                caption: obj.__('caption1')
            },
            {
                divClass: 'item',
                imgSrc: 'images/slideshow/slide02.jpg',
                imgAlt: 'second slide',
                caption: obj.__('caption2')
            },
            {
                divClass: 'item',
                imgSrc: 'images/slideshow/slide03.jpg',
                imgAlt: 'third slide',
                caption: obj.__('caption3')
            },
            {
                divClass: 'item',
                imgSrc: 'images/slideshow/slide04.jpg',
                imgAlt: 'fourth slide',
                caption: obj.__('caption4')
            },
            {
                divClass: 'item',
                imgSrc: 'images/slideshow/slide05.jpg',
                imgAlt: 'fifth slide',
                caption: obj.__('caption5')
            },
            {
                divClass: 'item',
                imgSrc: 'images/slideshow/slide06.jpg',
                imgAlt: 'sixth slide',
                caption: obj.__('caption6')
            }
        ],
        menu: { home: obj.__('nav.home'),
                know: obj.__('nav.know.us'),
                services: obj.__('nav.services'),
                contact: obj.__('nav.contact.us')},
        dropDown: {selected: js.getSelectedLang(),
                   nonSelected: js.getNonSelectedLang()},
        commitment: {title: obj.__('commitment.title'),
                     text: obj.__('commitment.text')},
        alliances: obj.__('business.alliances')

    });
});

// setting favicon
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

app.get('/conocenos', function (request, response) {
    response.render('pages/conocenos', {title: 'CONOCENOS'});
});
app.get('/contacto', function (request, response) {
    response.render('pages/contacto', {title: 'CONTACTO'});
});
app.get('/servicios', function (request, response) {
    response.render('pages/servicios', {title: 'SERVICIOS'});
});

app.get('*/es', function (request, response, next) {
    response.cookie('lang','es',{})
    response.redirect(request.get('referer'));
});
app.get('*/en', function (request, response, next) {
    response.cookie('lang','en',{})
    response.redirect(request.get('referer'));
});

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});


