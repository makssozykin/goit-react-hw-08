import { RegistrationForm } from '../../components/RegistrationForm/RegistrationForm';
import css from './RegistrationPage.module.css';

const RegistrationPage = () => {
  return (
    <main className={css.registrationPage}>
      <RegistrationForm />
    </main>
  );
};

export default RegistrationPage;
