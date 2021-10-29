import { NavLink } from 'react-router-dom';

import routes from '../Services/routes';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <ul className={s.NavLinkList}>
        <li className={s.NavLinkItem}>
          <NavLink
            exact
            to={routes.home}
            className={s.NavLink}
            activeClassName={s.NavLinkActive}
          >
            Home
          </NavLink>
        </li>
        <li className={s.NavLinkItem}>
          <NavLink
            to={routes.movies}
            className={s.NavLink}
            activeClassName={s.NavLinkActive}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
