import { Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Blog from './Blog';
import NotFound from './NotFound';
import LeftBar from './LeftBar';
import Navbar from './Navbar';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: theme.spacing(10, 2, 0, 35),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(9, 0, 0, 0),
    },
  },
}));

const Main = () => {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerOpen = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <>
      <Navbar handleDrawerOpen={handleDrawerOpen} />
      <LeftBar mobileOpen={mobileOpen} handleDrawerOpen={handleDrawerOpen} />
      <Box className={classes.wrapper}>
        <Switch>
          <Route exact path="/" render={() => <Dashboard />} />
          <Route exact path="/blog" render={() => <Blog />} />
          <Route exact path="*" render={() => <NotFound />} />
        </Switch>
      </Box>
    </>
  );
};

export default Main;
