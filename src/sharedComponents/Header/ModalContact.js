import React, { useState } from 'react';
import Contact from '../Dialogs/Contact';

const ModalContact = () => {
  const [show, setShow] = useState(false);
  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  return (
    <li className="nav-item">
      <button type="button" className="btn btn-nav mt-1" onClick={openModal}>
        Contact
      </button>

      <Contact closeModal={closeModal} show={show} />
    </li>
  );
};

export default ModalContact;
