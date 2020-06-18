export function loginvalidatorOld(state) {
    if (!state.username) {
        return true
    }
    if (!state.password) {
        return true
    }
    return false
}

export function loginvalidator(state) {

    var error = {
        usernameError: false,
        passwordError: false,
        error: false
    }
    
    if (!state.username) {
        error.usernameError = true
        error.error= true
    }
    if (!state.password) {
        error.passwordError = true
        error.error= true
    }
    
    return error
}

