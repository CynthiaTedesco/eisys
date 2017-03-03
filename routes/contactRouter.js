var express = require('express');
var js = require('../public/js/scripts');
var nodemailer = require('nodemailer');

var contactRouter = express.Router();
var mailHandler = function (request, response) {

    console.log('ADENTROOO DEL HANDLER');
    console.log(request.body);
    // Not the movie transporter!
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'lexartd@gmail.com', // Your email id
            pass: 'lexarraxel' // Your password
        }
    });

    var text = 'Hello world from \n\n';
    var mailOptions = {
        from: 'lexartd@gmail.com', // sender address
        to: 'cynthia.tedesco@gmail.com', // list of receivers
        subject: 'Email Example', // Subject line
        text: text //, // plaintext body
        // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log('ha habido un error: ' + error);
            response.json({yo: 'error'});
        }else{
            console.log('Eeeeeexito. Message sent: ' + info.response);
            response.json({yo: info.response});
        };
    });
}

contactRouter.route('/').get(function (request, response) {
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
contactRouter.route('/send').post(mailHandler);

exports.router = function () {
    return contactRouter;
}

