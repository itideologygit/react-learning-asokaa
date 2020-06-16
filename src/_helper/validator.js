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
        passwordError: false
    }

    if (!state.username) {
            error.usernameError = true
    }
    if (!state.password) {
        error.passwordError = true
    }
    
    return error
}

