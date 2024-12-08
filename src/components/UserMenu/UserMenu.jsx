import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';
import Button from '@mui/material/Button';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <nav className={css.isLoggedUserNav}>
      <p>{user.name}</p>
      <Button variant="contained" onClick={() => dispatch(logout())}>
        Logout
      </Button>
      {/* <button type="button" onClick={() => dispatch(logout())}>
        Logout
      </button> */}
    </nav>
  );
};
