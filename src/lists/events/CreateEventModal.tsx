import { useContext, useState } from "react";
import FormGroup from "../../utilityComponents/FormGroup";
import Modal from "../../utilityComponents/Modal";
import { EventContext } from "../../contexts/AppContextProvider";

interface Props {
  show: boolean;
  onHide(): void;
}

function CreateEventModal({ show, onHide }: Props) {
  const [name, setName] = useState('');
  const { add } = useContext(EventContext);

  const onSave = () => {
    add({ name });
    setName('');
    onHide();
  };

  return (
    <Modal show={show} title="Vista nýjan atburð" onHide={onHide} primaryBtnText="Vista" onPrimaryBtnClick={onSave}>
      <FormGroup label="Heiti" value={name} onChange={setName}></FormGroup>
    </Modal>
  )
}

export default CreateEventModal;