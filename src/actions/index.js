import Cookies from 'js-cookie';

export const SET_PHOTO = 'SET_PHOTO';

const setPhoto = (payload) => {
  return {
    type:SET_PHOTO,
    payload,
  }
}


// export const login = (email, password) => {
//     return (dispatch) => {
//         request
//             .post(api("/login"))
//             .send({email: email, password: password})
//             .end((err, res) => {
//                 dispatch(setToken(res.body['auth_token']));
//                 dispatch(getDashboard());
//                 Cookies.set('token', res.body['auth_token'], {expires: 7});
//             })
//     }
// }
