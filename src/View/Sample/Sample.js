import React from 'react'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

export default class Sample extends React.Component {

    // To use states in react it should be declared in constructor
    constructor(props) {
        super(props)
        // Below is the declaration for state
        this.state = {
            username: "",
        }
    }

    render = () => {
        return (
            <Grid container style={{ marginTop: '100px', marginLeft: '100px' }} >
                <Grid item xs={12} sm={12} md={12} style={{ marginTop: '10px' }} >
                    <TextField
                        label="Username"
                        variant="outlined"
                        onChange={event => this.setState({ username: event.target.value })}
                    />
                </Grid>
            </Grid>
        )
    }

}