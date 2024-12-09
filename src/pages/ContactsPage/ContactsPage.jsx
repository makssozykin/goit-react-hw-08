import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useToggle } from '../../hooks/useToggle';
import { fetchContacts } from '../../redux/contacts/operations';

import { ContactForm } from '../../components/ContactForm/ContactForm';
import { SearchBox } from '../../components/SearchBox/SearchBox';
import { Loader } from '../../components/Loader/Loader';

import { ContactList } from '../../components/ContactList/ContactList';
import { ContactModal } from '../../components/ContactModal/ContactModal';

import css from './ContactsPage.module.css';
const ContactsPage = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(state => state.contacts);
  const [contact, setContact] = useState('');
  const [btn, setBtn] = useState('');
  const { isOpenModal, openModal, closeModal } = useToggle();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contactInfo = (contact, btn) => {
    setContact(contact);
    setBtn(btn);
  };

  return (
    <main className={css.app}>
      <ContactForm />
      <div className={css['contacts-container']}>
        <SearchBox />
        {loading && !error && <Loader />}
        {error && <p>{error}</p>}
        {items.length !== 0 ? (
          <ContactList openModal={openModal} contactInfo={contactInfo} />
        ) : (
          <ContactList text="Телефонна книжка порожня. Додайте контакт!" />
        )}
        <ContactModal
          isOpenModal={isOpenModal}
          onCloseModal={closeModal}
          contact={contact}
          btn={btn}
        />
      </div>

      <Toaster position="top-right" reverseOrder={false} />
    </main>
  );
};

export default ContactsPage;
