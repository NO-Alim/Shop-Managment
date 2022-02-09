import React from 'react';
import { Link } from 'react-router-dom';
import { useNavContext } from '../hook/DrawerContext';
import classes from '../sass/Nav.module.scss';
import Account from './Account';
import AccountDrawer from './AccountDrawer';
import Menu from './Menu';
import MenuDrawer from './MenuDrawer';
const Nav = () => {
  const { setMenuDrawer } = useNavContext();
  const handleMenu = () => {
    setMenuDrawer(true);
  };
  return (
    <>
      <nav>
        <div className={classes.navContainer}>
          <div className="menu-container">
            <Menu handleMenu={handleMenu} />
          </div>
          <div className="logo-container" className={classes.logoContainer}>
            <div className="logo">
              <Link to="/">
                <h3>LOG BOOK</h3>
              </Link>
            </div>
          </div>
          <div className="account-container">
            <Account />
          </div>
        </div>
        <>
          <MenuDrawer />
          <AccountDrawer />
        </>
      </nav>
    </>
  );
};

export default Nav;
