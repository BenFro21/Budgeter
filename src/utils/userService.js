import tokenService from "./tokenService";
const backendUrl = 'http://localhost:8000/'

function login(cred){
    return fetch(backendUrl + 'login/', {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(cred)
    })
    .then(res => {
        if(res.ok) return res.json();
        throw new Error('Bad Credentials')
    })
    .then(({token}) => tokenService.setToken(token))
}

const signup = (user) => {
    console.log('sign up func ran')
    return fetch(backendUrl +'register/', {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(user)
    })
    .then(res => {
        console.log(res)
        if(res.ok) return res.json();
        throw new Error('Email already taken!')
    })
    .then(({token}) => {
        tokenService.setToken(token)
    });
};

function getUser() {
    return tokenService.getUserFromToken()
}

function logout() {
    tokenService.removeToken()
    console.log('logged out')
}

let userService = {

    signup,
    login,
    getUser,
    logout
};
export default userService