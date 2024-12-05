import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  console.log(user);
  return (
    <nav>
      <p>{user.name}</p>
      <button type="button" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </nav>
  );
};
