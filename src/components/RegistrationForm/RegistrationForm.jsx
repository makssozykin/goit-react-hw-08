import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegistrationForm.module.css';

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const handleRegisterSubmit = e => {
    e.preventDefault();
    const form = e.target;
    console.log(form);
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <form
      className={css.form}
      onSubmit={handleRegisterSubmit}
      autoComplete="off"
    >
      <label className={css.label}>
        Username <input type="text" name="name" />
      </label>
      <label className={css.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
