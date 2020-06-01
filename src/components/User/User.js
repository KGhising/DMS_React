import React from 'react';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },

    layout: {
        height: '350px', 
        overflowY: 'scroll', 
        position: 'relative',
        paddingTop: '15px',
 
    },
    list: {
        color: '#0091D5',
        cursor: 'pointer'
    },
    edit: {
        color: '#ffaa1d'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: ' 0 10px  0  17px'
    },
    button: {
        backgroundColor: '#1C4E80',
        color: 'white'
    }

  }));



const User = ({title, users}) => {
    const classes = useStyles();

    return (
        <Paper className = {classes.layout} >
           <div className={classes.header}>
                <Typography variant="h5"> 
                        <strong>{title}</strong>
                </Typography>

                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    endIcon={<AddIcon/>}
                >
                  <Link to="/create-user">ADD USER</Link>

                     
                </Button>
        {console.log(users)}
           </div>
           {
             
             users.map((user, index) => (
              <ListItem divider = {true} autoFocus = {true} key ={index}>
                <ListItemText 
                  primary={user} className = {classes.list}
                />
              
                <IconButton edge="end" aria-label="delete">
                    <EditIcon className = {classes.edit}  />
                  </IconButton>
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon color = 'secondary' />
                  </IconButton>

            </ListItem>
             ))

           }

            
          {/* <div>
            <List >
              {generate(
               ,
              )}
            </List>
          </div> */}
            
        </Paper>
    )
}

User.propTypes = {

}

export default User
