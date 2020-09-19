import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(9),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography align="center" variant="body1">Hercules : Pay your electricity bills in the smartest way possible using Herculues where a secure and reliable transaction is assured.</Typography>
          <Typography align="center" variant="body2">© 2020 Delta_Codinators</Typography>
        </Container>
      </footer>
    </div>
  );
}