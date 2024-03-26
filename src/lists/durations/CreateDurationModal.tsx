import { useContext, useState } from "react";
import FormGroup from "../../utilityComponents/FormGroup";
import Modal from "../../utilityComponents/Modal";
import { DurationContext } from "../../contexts/AppContextProvider";
import Form from "react-bootstrap/esm/Form";
import InputDuration from "../../utilityComponents/InputDuration";

const initSeconds = 3600; // 1 klukkutími

interface Props {
  show: boolean;
  onHide(): void;
}

function CreateDurationModal({ show, onHide: _onHide }: Props) {
  const [name, setName] = useState('');
  const [duration, setDuration] = useState(initSeconds);

  const { add } = useContext(DurationContext);

  const onSave = () => {
    add({ name, duration: duration });
    onHide();
  };

  const onHide = () => {
    _onHide();
    setName('');
    setDuration(initSeconds);
  };


  return (
    <Modal show={show} title="Vista nýtt tímabil" onHide={onHide} primaryBtnText="Vista" onPrimaryBtnClick={onSave}>
      <FormGroup label="Heiti" value={name} onChange={setName}></FormGroup>
      <Form.Label>Tímalengd</Form.Label>
      <InputDuration value={duration} onChange={setDuration}></InputDuration>
    </Modal>
  )
}

export default CreateDurationModal;