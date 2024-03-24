import { useContext, useState } from "react";
import Modal from "../../utilityComponents/Modal";
import { SpeedContext } from "../../contexts/AppContextProvider";
import FormGroup from "../../utilityComponents/FormGroup";

interface Props {
  show: boolean;
  onHide(): void;
}

function CreateSpeedModal({ show, onHide }: Props) {
  const [name, setName] = useState('');
  const [speed, setSpeed] = useState(1);

  const { add } = useContext(SpeedContext);

  const onSave = () => {
    add({ name, speed });
    setName('');
    setSpeed(1);
    onHide();
  };

  return (
    <Modal show={show} title="Vista nýjan tímahraða" onHide={onHide} primaryBtnText="Vista" onPrimaryBtnClick={onSave}>
      <FormGroup label="Heiti" value={name} onChange={setName}></FormGroup>
      <FormGroup type="number" label="Hraði" text="Hraði sem margfeldi við raunverulegan tíma." value={speed} onChange={(value?: number) => setSpeed(value ?? 0)}></FormGroup>
    </Modal>
  )
}

export default CreateSpeedModal;