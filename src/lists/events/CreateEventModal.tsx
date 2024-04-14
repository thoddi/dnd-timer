import { useContext, useState } from "react";
import Modal from "../../utilityComponents/Modal";
import { EventContext } from "../../contexts/AppContextProvider";
import { SlInput } from "../../utilityComponents/SlInput";

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
      <SlInput label="Heiti" value={name} onSlInput={(e: any) => setName(e.target.value)}></SlInput>
    </Modal>
  )
}

export default CreateEventModal;