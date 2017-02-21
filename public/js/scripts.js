/**
 * Created by Cynthia on 10/02/2017.
 */

var exports = module.exports = {};

var i18n;
var obj = {};
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

module.exports = exports;