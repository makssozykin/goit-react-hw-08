import { useSelector } from 'react-redux';

import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { Contact } from '../Contact/Contact';

import css from './ContactList.module.css';

export const ContactList = ({ openModal, contactInfo, text }) => {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <>
      <ul className={css['contact-list']}>
        {!text ? (
          visibleContacts.length !== 0 ? (
            visibleContacts.map(contact => (
              <li key={contact.id} className={css['contact-item']}>
                <Contact
                  contact={contact}
                  onModal={openModal}
                  contactInfo={contactInfo}
                />
              </li>
            ))
          ) : (
            <li className={css['contact-no-item']}>
              <p>Контакт не знайдено</p>
            </li>
          )
        ) : (
          <li className={css['contact-no-item']}>
            <p>{text}</p>
          </li>
        )}
      </ul>
    </>
  );
};
