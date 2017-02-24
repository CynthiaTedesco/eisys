// delete process.env["DEBUG_FD"];
var express = require('express');
var favicon = require('serve-favicon');
var path = require("path");
const routes = require('./routes');
var conocenosRouter = require('./routes/conocenosRouter');

var i18n = require('i18n');
var cookieParser = require('cookie-parser');
var js = require('./public/js/scripts');
var obj = {};

var lang;
i18n.configure({
    locales: ['en', 'es'],
    register: obj,
    directory: __dirname + '/locales'
});
console.log(obj.__('nav.services'));
js.setTranslator(i18n);

js.setObj(obj);
var app = express();

app.use(cookieParser());
//  Connect all our routes to our application
app.use('/', routes);
app.use('/conocenos', conocenosRouter.router());

app.use(i18n.init);
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
// change the rendering engine 
app.set('view engine', 'ejs');
// setting favicon
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});


