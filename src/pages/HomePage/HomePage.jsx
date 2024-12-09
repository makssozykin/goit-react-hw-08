import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import { useToggleBtn } from '../../hooks/useToggleBtn';
import Button from '@mui/material/Button';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import css from './HomePage.module.css';
export default function HomePage() {
  const { handleShowLogIn, showLogIn, handleHideLogIn } = useToggleBtn();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <main className={css.homePage}>
      {isLoggedIn ? (
        <div className={css.homeInfoCtn}>
          <h2>
            Welcome <span>{user.name}</span> to the Phonebook App!
          </h2>
        </div>
      ) : (
        <div className={css.homePageCtn}>
          <div className={css.homeInfoCtn}>
            <h2>Ласкаво просимо до Phonebook App!</h2>
            <p>Цей додаток дозволяє вам легко керувати своїми контактами.</p>
            <p>Просто додайте, відредагуйте або видаліть контакти.</p>
            <p>
              Будь ласка, увійдіть у свій обліковий запис або якщо Ви ще не
              зареєстровані, перейдіть у відповідний розділ!
            </p>
            <Button
              variant="contained"
              onClick={!showLogIn ? handleShowLogIn : handleHideLogIn}
            >
              Log In
            </Button>
          </div>
          {showLogIn && <LoginForm />}
        </div>
      )}
    </main>
  );
}
