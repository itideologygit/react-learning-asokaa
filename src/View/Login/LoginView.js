import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';

import { loginvalidator } from '../../_helper/validator'

export default class LoginView extends React.Component {

    // To use states in react it should be declared in constructor
    constructor(props) {
        super(props)
        // Below is the declaration for state
        this.state = {
            username: "",
            password: "",
            usernameError: false,
            passwordError: false,
        }
    }

    // Function for validation inside the class
    validatorOld = event => {

        // The below is the validatior function imported from _helper
        this.setState({
            error: loginvalidator(this.state)
        })
    }

    // Function for validation inside the class
    validator = event => {
        // The below is the validatior function imported from _helper
        this.setState( loginvalidator(this.state) )
    }



    login = () => {
        if( !this.state.error ){
            alert(" Hi..... You  are logged in ")
        }
    }

    render = () => {
        return (
            <Grid container style={{ marginTop: '100px', marginLeft: '100px' }} >
                <Grid item xs={12} sm={12} md={12} style={{ marginTop: '10px' }} >
                    <TextField
                        label="Username"
                        variant="outlined"
                        error={this.state.usernameError}
                        onChange={event => this.setState({ username: event.target.value }, () => { this.validator() })}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={12} style={{ marginTop: '10px' }} >

                    {/* To do some function on change of value in the below field use  the onchange function
                onchange function returns an event
                 */}

                    <TextField
                        label="Password"
                        variant="outlined"
                        error={this.state.passwordError}
                        onChange={event => {
                            //It is advised to call the validator function inside the setstate function to make sure that it is called after assigning the value to the state
                            this.setState({ password: event.target.value }, () => { this.validator() })
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={12} style={{ marginTop: '10px' }} >
                    <Button color='secondary' size='small' variant='contained' onClick={this.login} >
                        <DeleteIcon /> Login
                </Button>
                </Grid>
            </Grid>
        )
    }

}