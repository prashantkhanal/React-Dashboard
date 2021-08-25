import {
  Typography,
  makeStyles,
  AppBar,
  Toolbar,
  Box,
  InputBase,
  alpha,
  IconButton,
  Hidden,
} from '@material-ui/core';
import { Search } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({
  search: {
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
  },
  input: {
    marginLeft: theme.spacing(2),
    color: '#ffffffff',
    width: '669px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  navbar: {
    background: '#1E293B',
  },

  toolbar: {
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

const Navbar = ({ handleDrawerOpen }) => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.navbar} elevation={0}>
      <Toolbar disableGutters className={classes.toolbar}>
        {/* <img src={prashant} alt="logo" className={classes.logo} /> */}
        <Typography variant="h6" className={classes.bannner}>
          {' <Prashant/>'}
        </Typography>
        <Box display="flex" alignItems="center" className={classes.search}>
          <Search />
          <InputBase placeholder="Search..." className={classes.input} />
        </Box>
        <Hidden smDown>
          <Box display="flex" mr={3} alignItems="center">
            <ExitToAppIcon />
          </Box>
        </Hidden>
        <Hidden mdUp>
          <IconButton color="inherit" onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
