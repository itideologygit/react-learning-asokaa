export function loginvalidator(state) {
    if(!state.username){
        return true
    }
    if(!state.password){
        return true
    }
    return false
}