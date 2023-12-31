import { NavLink } from 'react-router-dom';
// import css from './AuthNav.module.css';
import Nav from 'react-bootstrap/Nav';

export const AuthNav = () => {
  return (
    <Nav variant="pills" defaultActiveKey="/">
      <Nav.Item>
        <Nav.Link as={NavLink} to="/register">
          <h4> Register</h4>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/login">
          <h4> Login</h4>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

/* <div>
<NavLink className={css.link} to="/register">
  Register
</NavLink>
<NavLink className={css.link} to="/login">
  Login
</NavLink>
</div> */
