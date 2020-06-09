import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';


export default class LoginView extends React.Component {


    render(){
        return(
        <Grid container style={{ marginTop: '100px'}} >
            <Grid item xs={12} style={{ marginTop: '10px'}} >
                <TextField
                    label="Username"
                    defaultValue="sample@localhost.com"
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={12} style={{ marginTop: '10px'}} >
                <TextField
                    label="Password"
                    defaultValue="******"
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={4} style={{ marginTop: '10px'}} >
                <Button color='secondary' size='small' variant='contained' >
                    <DeleteIcon /> Login
                </Button>
            </Grid>
        </Grid> 
        )
    }

}