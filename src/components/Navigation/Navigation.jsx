import { NavLink } from 'react-router-dom';
// import css from './Navigation.module.css';
import { useAuth } from '../../hooks/useAuth';
import Nav from 'react-bootstrap/Nav';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav variant="pills" defaultActiveKey="/">
      <Nav.Item>
        <Nav.Link as={NavLink} to="/">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        {isLoggedIn && (
          <Nav.Link as={NavLink} to="/phonebook">
            Phonebook
          </Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

/* <nav>
<NavLink className={css.link} to="/">
  Home
</NavLink>
{isLoggedIn && (
  <NavLink className={css.link} to="/phonebook">
    Phonebook
  </NavLink>
)}
</nav> */
