import Cookie from 'js-cookie';

const SetCookie = (cookiename, cookievalue) => {
    Cookie.set(cookiename, cookievalue, {
        expires: 1,
        secure: false,
        sameSite: 'strict',
        path: '/'
    });
}

export default SetCookie;