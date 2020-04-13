import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    height: 64,
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  title: {
    flexGrow: 1,
  },

  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
  }
}));

function ButtonAppBar(props) {
  const classes = useStyles();
  return (
    <AppBar className={classes.root} color='primary' position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" >
          {props.pageName}
        </Typography>
        <Button variant="outlined" color="inherit" onClick={props.onClick}>{props.btnText}</Button>
      </Toolbar>
    </AppBar>
  )
}

export default ButtonAppBar;