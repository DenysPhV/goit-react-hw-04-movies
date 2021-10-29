import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import s from './MovieBar.module.css';

const MovieBar = ({ match, location }) => {
  return (
    <section className={s.MovieBar}>
      <ul className={s.NavLinkList}>
        <li className={s.NavLinkItem}>
          <NavLink
            exact
            to={{
              pathname: `${match.url}/cast`,
              state: { from: location.state?.from && location.state.from },
            }}
            className={s.NavLink}
            activeClassName={s.NavLinkActive}
          >
            Cast
          </NavLink>
        </li>
        <li className={s.NavLinkItem}>
          <NavLink
            to={{
              pathname: `${match.url}/reviews`,
              state: { from: location.state?.from && location.state.from },
            }}
            className={s.NavLink}
            activeClassName={s.NavLinkActive}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </section>
  );
};

export default withRouter(MovieBar);
