import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleLoginSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(() => {
        console.log('login success');
      })
      .catch(() => {
        console.log('login error');
      });
    console.log(form.elements.email.value);
    form.reset();
  };
  return (
    <form className={css.form} onSubmit={handleLoginSubmit} autoComplete="off">
      <label className={css.label}>
        Email <input type="email" name="email" />
      </label>
      <label className={css.label}>
        Password <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
