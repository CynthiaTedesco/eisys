/**
 * Created by Cynthia on 03/03/2017.
 */
var nodemailer = require('nodemailer');

var router = express.Router();
app.use('/sayHello', router);
router.post('/', handleSayHello); // handle the route at yourdomain.com/sayHello

function handleSayHello(req, res) {
    // Not the movie transporter!
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'lexartd@gmail.com', // Your email id
            pass: 'lexarraxel' // Your password
        }
    });

    var text = 'Hello world from \n\n' + req.body.name;
    var mailOptions = {
        from: 'from@gmail.com>', // sender address
        to: 'cynthia.tedesco@gmail.com', // list of receivers
        subject: 'Email Example', // Subject line
        text: text //, // plaintext body
        // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log('ha habido un error: ' + error);
            res.json({yo: 'error'});
        }else{
            console.log('Eeeeeexito. Message sent: ' + info.response);
            res.json({yo: info.response});
        };
    });
}

