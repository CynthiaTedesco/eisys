var express = require('express');
var favicon = require('serve-favicon');
var path = require("path");
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
// change the rendering engine 
app.set('view engine', 'ejs');

// passing to express the template index.js to solve first page.
app.get('/', function (request, response) {
    response.render('pages/index', {
        slideshows: [
            {
                divClass: 'item active',
                imgSrc: 'images/slideshow/slide01.jpg',
                imgAlt: 'first slide',
                caption: 'caption1'
            },
            {
                divClass: 'item',
                imgSrc: 'images/slideshow/slide02.jpg',
                imgAlt: 'second slide',
                caption: 'caption2'
            },
            {
                divClass: 'item',
                imgSrc: 'images/slideshow/slide03.jpg',
                imgAlt: 'third slide',
                caption: 'caption3'
            },
            {
                divClass: 'item',
                imgSrc: 'images/slideshow/slide04.jpg',
                imgAlt: 'fourth slide',
                caption: 'caption4'
            },
            {
                divClass: 'item',
                imgSrc: 'images/slideshow/slide05.jpg',
                imgAlt: 'fifth slide',
                caption: 'caption5'
            },
            {
                divClass: 'item',
                imgSrc: 'images/slideshow/slide06.jpg',
                imgAlt: 'sixth slide',
                caption: 'caption6'
            }
        ]
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

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});


