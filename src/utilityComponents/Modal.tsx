import React from 'react';
import Button from 'react-bootstrap/Button';
import Dialog from 'react-bootstrap/Modal';

interface Props {
  show?: boolean;
  title?: string;
  onHide?: () => void;
  children: React.ReactNode;
  primaryBtnText?: string;
  onPrimaryBtnClick?: () => void;
}
const Modal = ({ show, title, onHide, children, primaryBtnText, onPrimaryBtnClick }: Props) => {
  return (
    <Dialog show={show} onHide={onHide}>
      <Dialog.Header closeButton>
        {title && (
          <Dialog.Title>{title}</Dialog.Title>
        )}
      </Dialog.Header>

      <Dialog.Body>{children}</Dialog.Body>

      <Dialog.Footer>
        <Button variant="secondary" onClick={onHide}>Hætta við</Button>
        <Button variant="primary" onClick={onPrimaryBtnClick}>{primaryBtnText ?? 'Áfram'}</Button>
      </Dialog.Footer>
    </Dialog>
  );
};

export default Modal;