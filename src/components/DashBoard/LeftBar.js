import { makeStyles, Hidden, Drawer } from '@material-ui/core';
import SideNavList from './SideNavList';

const useStyles = makeStyles((theme) => ({
  topBar: {
    paddingTop: theme.spacing(10),
    backgroundColor: '#0A213C',
    height: '100vh',
    color: '#555',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#000',
        color: '#ffffffff !important',
        borderRadius: '5px',
      },
    },
  },
  icons: {
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  text: {
    fontWeight: '500',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    textTransform: 'capitalize',
  },
  drawerPaper: {
    width: '250px',
    marginTop: '64px',
    backgroundColor: '#0A213C',
    color: '#555',
    [theme.breakpoints.down('sm')]: {
      marginTop: '0px',
    },
  },
}));

const LeftBar = ({ mobileOpen, handleDrawerOpen }) => {
  const classes = useStyles();

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={'left'}
          open={mobileOpen}
          onClose={handleDrawerOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <SideNavList />
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          <SideNavList />
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default LeftBar;
