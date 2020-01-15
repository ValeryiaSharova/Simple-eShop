import React, { useState } from 'react';
import About from '../Dialogs/About';

const ModalAbout = () => {
  const [show, setShow] = useState(false);
  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  return (
    <li className="nav-item">
      <button type="button" className="btn btn-nav mt-1" onClick={openModal}>
        About
      </button>

      <About closeModal={closeModal} show={show} />
    </li>
  );
};
export default ModalAbout;
