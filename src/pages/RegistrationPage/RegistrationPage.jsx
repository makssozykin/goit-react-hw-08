import { RegistrationForm } from '../../components/RegistrationForm/RegistrationForm';
import css from './RegistrationPage.module.css';

const RegistrationPage = () => {
  return (
    <main className={css.registrationPage}>
      <h1>Registration</h1>
      <RegistrationForm />
    </main>
  );
};

export default RegistrationPage;
