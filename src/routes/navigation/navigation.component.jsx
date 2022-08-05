import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from "../../components/contexts/user.context";

import './navigation.styles.scss'

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);
  
  return (
    <Fragment>
      <nav className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo"/>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="shop">
            SHOP
          </Link>
          <Link className="nav-link" to="auth">
            SIGN IN
          </Link>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;