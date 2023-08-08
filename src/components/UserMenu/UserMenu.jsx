import { useAuth } from '../../hooks/useAuth';
import css from './UserMenu.module.css';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import Button from 'react-bootstrap/Button';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogout = () => dispatch(logOut());

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user?.name}</p>
      <Button variant="primary" onClick={handleLogout} type="button">
        Logout
      </Button>
    </div>
  );
};
