import { useContext, useState } from "react";
import FormGroup from "../../utilityComponents/FormGroup";
import Modal from "../../utilityComponents/Modal";
import { DurationContext } from "../../contexts/AppContextProvider";

interface Props {
  show: boolean;
  onHide(): void;
}

function CreateDurationModal({ show, onHide }: Props) {
  const defaultDuration = 3600; // 1 hour
  const [name, setName] = useState('');
  const [duration, setDuration] = useState(defaultDuration); // 1 hour

  const { add } = useContext(DurationContext);

  const onSave = () => {
    add({ name, duration });
    setName('');
    setDuration(defaultDuration);
    onHide();
  };

  return (
    <Modal show={show} title="Vista nýtt tímabil" onHide={onHide} primaryBtnText="Vista" onPrimaryBtnClick={onSave}>
      <FormGroup label="Heiti" value={name} onChange={setName}></FormGroup>
      <FormGroup type="number" label="Tímalengd" value={duration} onChange={(value?: number) => setDuration(value ?? 0)}></FormGroup>
    </Modal>
  )
}

export default CreateDurationModal;