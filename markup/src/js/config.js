let url = location.protocol + '//' + location.hostname + '/';

if (location.hostname === "localhost" || location.hostname === "127.0.0.1") url = 'http://localhost:27016/';
// if (location.hostname === "localhost" || location.hostname === "127.0.0.1") url = 'http://local.provianta.ru/';

const config = {
    restBasket: url + 'rest/basket/',
    restFavorite: url + 'rest/favorite/',
    restCity: url + 'rest/city/',
    restCookie: url + 'rest/cookie/',
};


export default config;