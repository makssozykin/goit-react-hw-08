import Modal from 'react-modal';
import { useDispatch } from 'react-redux';

import toast from 'react-hot-toast';
import { deleteContact } from '../../redux/contacts/operations';
import { ContactForm } from '../ContactForm/ContactForm';
import { IoMdClose } from 'react-icons/io';
import s from './ContactModal.module.css';

export const ContactModal = ({ isOpenModal, onCloseModal, contact, btn }) => {
  const dispatch = useDispatch();
  const handleDeleteContact = () => {
    dispatch(deleteContact(contact.id));
    toast.success('Контакт видалено зі списку');
    onCloseModal();
  };

  return (
    <Modal
      isOpen={isOpenModal}
      onRequestClose={onCloseModal}
      ariaHideApp={false}
      shouldCloseOnOverlayClick={true}
      className={s.modal}
      overlayClassName={s.overlay}
    >
      <div className={s.modalForm}>
        <button className={s.closeBtn} onClick={onCloseModal}>
          <IoMdClose className={s.closeBtnSvg} />
        </button>
        {btn === 'Edit' && (
          <ContactForm initialValues={contact} onCloseModal={onCloseModal} />
        )}
        {btn === 'Delete' && (
          <div className={s['ask-container']}>
            <h2>Ви впевнені, що хочете видалити контакт?</h2>
            <button
              className={s['contact-item-btn']}
              onClick={handleDeleteContact}
            >
              Так
            </button>
            <button className={s['contact-item-btn']} onClick={onCloseModal}>
              Ні
            </button>
          </div>
        )}
      </div>
    </Modal>
  );
};
