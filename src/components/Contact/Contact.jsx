import { useDispatch } from 'react-redux';

import toast from 'react-hot-toast';
import { deleteContact } from '../../redux/contacts/operations';
import { IoIosContact } from 'react-icons/io';
import { FcPhoneAndroid } from 'react-icons/fc';

import css from './Contact.module.css';

export const Contact = ({ contact, onModal, contactInfo }) => {
  const dispatch = useDispatch();
  const handleModal = () => {
    onModal();
    contactInfo(contact);
  };

  const handleDeleteContact = () => {
    dispatch(deleteContact(contact.id));
    toast.success('Контакт видалено зі списку');
  };
  const { name, number } = contact;
  return (
    <>
      <div className={css.contactbox}>
        <p>
          <IoIosContact />
          {name}
        </p>
        <p>
          <FcPhoneAndroid />
          {number}
        </p>
      </div>
      <div className={css['contact-item-buttons']}>
        <button
          className={css['contact-item-btn']}
          type="button"
          onClick={handleModal}
        >
          Edit
        </button>
        <button
          className={css['contact-item-btn']}
          type="button"
          onClick={handleDeleteContact}
        >
          Delete
        </button>
      </div>
    </>
  );
};
