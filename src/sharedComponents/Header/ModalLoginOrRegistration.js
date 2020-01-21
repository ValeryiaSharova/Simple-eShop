import React, { useState } from 'react';
import LoginOrReg from '../Dialogs/LoginOrReg';

const ModalLoginOrRegistration = () => {
  const [show, setShow] = useState(false);
  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  return (
    <li className="nav-item mr-2">
      <button type="button" className="btn btn-nav mt-1" onClick={openModal}>
        Login or Register
      </button>

      <LoginOrReg closeModal={closeModal} show={show} />
    </li>
  );
};

export default ModalLoginOrRegistration;
