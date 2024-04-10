import { useContext, useState } from "react";
import FormGroup from "../../utilityComponents/FormGroup";
import Modal from "../../utilityComponents/Modal";
import { LogContext, TimeContext } from "../../contexts/AppContextProvider";
import Form from "react-bootstrap/esm/Form";
import InputDuration from "../../utilityComponents/InputDuration";

const initSeconds = 3600; // 1 klukkutími

interface Props {
  show: boolean;
  onHide(): void;
}

function CreateOneOffDurationModal({ show, onHide: _onHide }: Props) {
  const [text, setText] = useState('');
  const [duration, setDuration] = useState(initSeconds);

  const { addTime } = useContext(TimeContext);
  const { add: addLog } = useContext(LogContext);

  const onSave = () => {
    const newTime = addTime(duration);
    addLog({ text, inGameTime: newTime })
    onHide();
  };

  const onHide = () => {
    _onHide();
    setText('');
    setDuration(initSeconds);
  };


  return (
    <Modal show={show} title="Spóla áfram..." onHide={onHide} primaryBtnText="Keyra" onPrimaryBtnClick={onSave}>
      <FormGroup label="Texti" value={text} onChange={setText}></FormGroup>
      <Form.Label>Tímalengd</Form.Label>
      <InputDuration value={duration} onChange={setDuration}></InputDuration>
    </Modal>
  )
}

export default CreateOneOffDurationModal;