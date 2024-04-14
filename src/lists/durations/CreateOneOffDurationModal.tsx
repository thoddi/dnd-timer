import { useContext, useState } from "react";
import Modal from "../../utilityComponents/Modal";
import { LogContext, TimeContext } from "../../contexts/AppContextProvider";
import Form from "react-bootstrap/esm/Form";
import InputDuration from "../../utilityComponents/InputDuration";
import { SlInput } from "../../utilityComponents/SlInput";

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
      <SlInput label="Texti" value={text} onSlInput={(e: any) => setText(e.target.value)}></SlInput>
      <Form.Label>Tímalengd</Form.Label>
      <InputDuration value={duration} onChange={setDuration}></InputDuration>
    </Modal>
  )
}

export default CreateOneOffDurationModal;