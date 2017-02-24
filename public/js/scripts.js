/**
 * Created by Cynthia on 10/02/2017.
 */

var exports = module.exports = {};

var i18n;
var obj = {};
var commons = {};
var defaultLang = 'es';
var spanishObj = {
    name: 'es',
    label: 'ESPAÑOL',
    url: '/es'
};
var englishObj = {
    name: 'en',
    label: 'ENGLISH',
    url: '/en'
};

var selectedLang;
var nonSelectedLang;

exports.setTranslator = function (i18n) {
    this.i18n = i18n;
}
exports.getTranslator = function(){
    return this.i18n;
}
exports.getLanguages = function(){
    return ['es', 'en'];
}

exports.getSelectedLang = function(){
    return selectedLang;
}

exports.validRoute = function (url) {
    return url.indexOf('images') + url.indexOf('stylesheets') + url.indexOf('js') === -3;
}
exports.getNonSelectedLang = function () {
    return nonSelectedLang;
}
exports.setObj = function(obj1){
    obj = obj1;
}
exports.getObj = function(){
    return obj;
}
exports.resolveLanguage = function(request) {
    if (request && request.cookies){
        console.log('resolving language');
        if (request.cookies.lang === 'en'){
            selectedLang = englishObj;
            nonSelectedLang = spanishObj;
        } else {
            selectedLang = spanishObj;
            nonSelectedLang = englishObj;
        }
        return selectedLang.name;
    } else {
        console.log('setting default language');
        selectedLang = spanishObj;
        nonSelectedLang = englishObj;
        return defaultLang;
    }
}

exports.getLocals = function(locals){
    locals.menu = commons.menu;
    locals.dropDown = commons.dropDown;

    return locals;
}

exports.setLabels = function(request, lang){
    this.getTranslator().setLocale(request, lang);

    commons = {menu: { home: obj.__('nav.home'),
        know: obj.__('nav.know.us'),
        know_about: obj.__('nav.know.us.about'),
        know_philosophy: obj.__('nav.know.us.philosophy'),
        know_background: obj.__('nav.know.us.background'),
        know_working: obj.__('nav.know.us.working'),
        know_allies: obj.__('nav.know.us.allies'),
        services: obj.__('nav.services'),
        contact: obj.__('nav.contact.us')},
        dropDown: {selected: this.getSelectedLang(),
            nonSelected: this.getNonSelectedLang()}};
}

module.exports = exports;