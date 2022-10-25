

function setToken(token){
    localStorage.setItem('token', token)
}

function getToken(){
    let token = localStorage.getItem('token')
    if(token !== 'undefined' && token !== null){
        const payload = JSON.parse(atob(token.split('.')[1]))
        if(payload.exp < Date.now() / 1000){
            localStorage.removeItem('token')
            token = null
        }
    }
    return token === 'undefined' ? undefined : token
}

function getUserFromToken(){
    const token = getToken()
    console.log(token)
    return token ? JSON.parse(atob(token.split('.')[1])).user : null
}

function removeToken() {
    localStorage.removeItem('token')
}


let tokenService= {
    setToken,
    getToken, 
    getUserFromToken,
    removeToken
}

export default tokenService
