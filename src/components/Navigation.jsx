import { NavLink } from 'react-router';

import capitalize from '../utils/capitalize';

const Navigation = ({ links }) => {
  return (
    <ul>
      {links.map((link) => (
        <li key={link.id}>
          <NavLink
            to={`/${link.name}`}
            className={({ isActive }) =>
              'nav_link' + (isActive ? '__active' : '')
            }
            onClick={() => {
              document.getElementById('mainContent').scrollTop = 0;
            }}
          >
            {capitalize(link.name)}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
