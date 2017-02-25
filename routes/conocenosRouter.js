/**
 * Created by Cynthia on 24/02/2017.
 */
var express = require('express');
var js = require('../public/js/scripts');

var conocenosRouter = express.Router();

conocenosRouter.route('/').get(function (request, response, next) {
    var locals = js.getLocals({
        title: js.getObj().__('nav.know.us'),
        subsection: '../pages/acerca.ejs'
    });
    locals.section = js.getAboutLocals();
    locals.menu.know.class = 'active';
    locals.menu.know_about.class = 'active';
    response.render('pages/conocenos', locals);
})
conocenosRouter.route('/acerca').get(function (request, response, next) {
    var locals = js.getLocals({
        title: js.getObj().__('nav.know.us'),
        subsection: '../pages/acerca.ejs'
    });
    locals.section = js.getAboutLocals();
    locals.menu.know.class = 'active';
    locals.menu.know_about.class = 'active';
    response.render('pages/conocenos', locals);
})
conocenosRouter.route('/filosofia').get(function (request, response, next) {
    var locals = js.getLocals({
        title: js.getObj().__('nav.know.us'),
        section: {title: js.getObj().__('philosophy.title')},
        subsection: '../pages/filosofia.ejs'
    })
    locals.menu.know.class = 'active';
    locals.menu.know_philosophy.class = 'active';
    response.render('pages/conocenos', locals);
})
conocenosRouter.route('/trayectoria').get(function (request, response, next) {
    var locals = js.getLocals({
        title: js.getObj().__('nav.know.us'),
        section: {title: js.getObj().__('background.title')},
        subsection: '../pages/trayectoria.ejs'
    });
    locals.menu.know.class = 'active';
    locals.menu.know_background.class = 'active';
    response.render('pages/conocenos', locals);
})
conocenosRouter.route('/trabajo').get(function (request, response, next) {
    var locals = js.getLocals({
        title: js.getObj().__('nav.know.us'),
        section: {title: js.getObj().__('working.title')},
        subsection: '../pages/trabajo.ejs'
    });
    locals.menu.know.class = 'active';
    locals.menu.know_working.class = 'active';
    response.render('pages/conocenos', locals);
})
conocenosRouter.route('/alianzas').get(function (request, response, next) {
    var locals = js.getLocals({
        title: js.getObj().__('nav.know.us'),
        section: {title: js.getObj().__('allies.title')},
        subsection: '../pages/alianzas.ejs'
    });
    locals.menu.know.class = 'active';
    locals.menu.know_allies.class = 'active';
    response.render('pages/conocenos', locals);
})

exports.router = function () {
    return conocenosRouter;
}

