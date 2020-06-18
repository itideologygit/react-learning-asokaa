// Auth class

class Auth {
    constructor(){
        this.isAuthenticated= false
    }

    onLogin = () => {
        this.isAuthenticated = true
    }
    
    onLogout = () => {
        this.isAuthenticated = false

    }

    isAuth = () => {
        return this.isAuthenticated
    }
}

export default new Auth()