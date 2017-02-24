/**
 * Created by Cynthia on 24/02/2017.
 */
var express = require('express');
var js = require('../public/js/scripts');

var conocenosRouter = express.Router();

conocenosRouter.route('/').get(function(request,response,next){
        response.render('pages/conocenos', js.getLocals({title: js.getObj().__('nav.know.us'),
            showSections:{
                about:true
            }}));
    })
conocenosRouter.route('/acerca').get(function(request,response,next){
    response.render('pages/conocenos', js.getLocals({title: js.getObj().__('nav.know.us'),
        showSections:{
            about:true
        }}));
    })
conocenosRouter.route('/filosofia').get(function(request,response,next){
    response.render('pages/conocenos', js.getLocals({title: js.getObj().__('nav.know.us'),
        showSections:{
            philosophy:true
        }}));
})
conocenosRouter.route('/trayectoria').get(function(request,response,next){
        response.render('pages/conocenos', js.getLocals({title: js.getObj().__('nav.know.us'),
            showSections:{
                background:true
            }}));
    })
conocenosRouter.route('/trabajo').get(function(request,response,next){
    response.render('pages/conocenos', js.getLocals({title: js.getObj().__('nav.know.us'),
        showSections:{
            working:true
        }}));
})
conocenosRouter.route('/alianzas').get(function(request,response,next){
    response.render('pages/conocenos', js.getLocals({title: js.getObj().__('nav.know.us'),
        showSections:{
            allies:true
        }}));
})

exports.router = function(){
    return conocenosRouter;
}

