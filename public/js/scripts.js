/**
 * Created by Cynthia on 10/02/2017.
 */

var exports = module.exports = {};

var defaultLang = 'es';
var spanishObj = {
    label: 'ESPAÑOL',
    url: '/es'
};
var englishObj = {
    label: 'ENGLISH',
    url: '/en'
};

var selectedLang;
var nonSelectedLang;

exports.getLanguages = function(){
    return ['es', 'en'];
}

exports.getSelectedLang = function(){
    return selectedLang;
}

exports.getNonSelectedLang = function () {
    return nonSelectedLang;
}

exports.resolveLanguage = function(cookies) {
    if (cookies.lang){
        if (cookies.lang === 'es'){
            selectedLang = spanishObj;
            nonSelectedLang = englishObj;
        } else {
            selectedLang = englishObj;
            nonSelectedLang = spanishObj;
        }
        return cookies.lang;
    } else {
        selectedLang = spanishObj;
        nonSelectedLang = englishObj;
        return defaultLang;
    }
}

module.exports = exports;