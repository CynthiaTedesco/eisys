var express = require('express');
var js = require('../public/js/scripts');

var contactRouter = express.Router();

contactRouter.route('/').get(function (request, response, next) {
    var locals = js.getLocals({
        title: js.getObj().__('nav.contact.us'),
        text: js.getObj().__('contact.text'),
        name: js.getObj().__('contact.name'),
        company: js.getObj().__('contact.company'),
        position: js.getObj().__('contact.position'),
        phone: js.getObj().__('contact.phone'),
        cellphone: js.getObj().__('contact.cellphone'),
        mail: js.getObj().__('contact.mail'),
        comments: js.getObj().__('contact.comments'),
        send: js.getObj().__('contact.send'),
        mandatory: js.getObj().__('contact.mandatory')
    });
    locals.menu.contact.class = "active";
    response.render('pages/contacto', locals);
})

exports.router = function () {
    return contactRouter;
}

