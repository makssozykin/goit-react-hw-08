import { LoginForm } from '../../components/LoginForm/LoginForm';
import css from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <main className={css.loginPage}>
      <LoginForm />
    </main>
  );
};

export default LoginPage;
