import { useContext, useState } from "react";
import Modal from "../../utilityComponents/Modal";
import { SpeedContext } from "../../contexts/AppContextProvider";
import { SlInput } from "../../utilityComponents/SlInput";

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
      <SlInput label="Heiti" value={name} onSlInput={(e: any) => setName(e.target.value)}></SlInput>
      <SlInput type="number" label="Hraði" helpText="Hraði sem margfeldi við raunverulegan tíma." valueAsNumber={speed} onSlInput={(e: any) => setSpeed(e.target.value ?? 0)}></SlInput>
    </Modal>
  )
}

export default CreateSpeedModal;