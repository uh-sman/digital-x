import cookie from "cookie"


// export const setAuthTokenCookie = () => {
//     const authToken = cookie.parse(document.cookie).authToken
//     if (authToken) {
//         document.cookie = `authToken=${authToken}; expires=${new Date(Date.now() + 3600 * 1000 * 24 * 30)
//         .toUTCString()
//         .replace(" GMT", "")
//         }
//         ; path=/`
//     }
//     return {
//         props: {}
//     }
// }




//   set('jwtToken', token, { expires: 1, secure: true, sameSite: 'strict' });