/**
 * Created by Cynthia on 10/02/2017.
 */

var exports = module.exports = {};

var defaultLang = 'es';

exports.resolveLanguage = function(cookies) {
    return cookies.lang ? cookies.lang : defaultLang;
}

module.exports = exports;