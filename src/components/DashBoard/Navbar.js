import {
  Typography,
  makeStyles,
  AppBar,
  Toolbar,
  Box,
  InputBase,
  alpha,
  Avatar,
  IconButton,
  Hidden,
} from '@material-ui/core';
import { Search } from '@material-ui/icons';
import SubMenu from './SubMenu';
import prashant from '../../assets/IMG_20200616_160535.jpg';
import MenuIcon from '@material-ui/icons/Menu';
import Brightness4Icon from '@material-ui/icons/Brightness4';

const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: '#122942',
  },
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
  toolbar: {
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

const Navbar = ({ handleDrawerOpen }) => {
  console.log('this is props', handleDrawerOpen);
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
            <Brightness4Icon />
            <SubMenu />
            <Avatar src={prashant} />
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
