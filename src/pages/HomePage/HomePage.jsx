import { Title } from '../../components/Title/Title';
import css from './HomePage.module.css';
export default function HomePage() {
  return (
    <main className={css.homePage}>
      <Title title="Phonebook" />
    </main>
  );
}
