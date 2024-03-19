import React from 'react';

interface Props {
  onClose?: () => void;
  children: React.ReactNode;
}
const Modal = ({ onClose, children }: Props) => {

  const handleClose = () => {
    onClose && onClose();
  };

  return (
    <dialog open onClose={handleClose}>
      <i style={{ position: 'absolute', top: -4, right: 4, cursor: 'pointer', fontStyle: 'normal' }} onClick={handleClose}>x</i>
      {children}
    </dialog>
  );
};

export default Modal;