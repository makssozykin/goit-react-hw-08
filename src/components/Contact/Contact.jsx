import { IoIosContact } from 'react-icons/io';
import { FcPhoneAndroid } from 'react-icons/fc';

import css from './Contact.module.css';

export const Contact = ({ contact, onModal, contactInfo }) => {
  const handleModalEdit = e => {
    console.log('Btn:', e.target.innerHTML);
    onModal();
    contactInfo(contact, e.target.innerHTML);
  };

  const handleModalDelete = e => {
    onModal();
    contactInfo(contact, e.target.innerHTML);
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
          onClick={handleModalEdit}
        >
          Edit
        </button>
        <button
          className={css['contact-item-btn']}
          type="button"
          onClick={handleModalDelete}
        >
          Delete
        </button>
      </div>
    </>
  );
};
