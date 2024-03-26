import { useContext, useState } from "react";
import { TimerContext } from "../contexts/AppContextProvider";
import Modal from "../utilityComponents/Modal";
import FormGroup from "../utilityComponents/FormGroup";
import { Form } from "react-bootstrap";
import InputDuration from "../utilityComponents/InputDuration";

interface Props {
  show: boolean;
  onHide(): void;
  durationId?: number;
  eventId?: number;
  logId?: number;
}

function CreateTimerModal({ show, onHide: _onHide, durationId, eventId, logId }: Props) {
  const [name, setName] = useState('');
  const [timerGoal, setTimerGoal] = useState<number>();
  const timers = useContext(TimerContext);

  const onSave = () => {
    timers.add({ name, eventId, logId, durationId, finishAtInGameTime: timerGoal || undefined });
    onHide();
  };

  const onHide = () => {
    setName('');
    setTimerGoal(undefined);
    _onHide();
  };

  return (
    <Modal show={show} title="Vista nýjan teljara" onHide={onHide} primaryBtnText="Vista" onPrimaryBtnClick={onSave}>
      <FormGroup label="Heiti teljara" value={name} onChange={setName} autoFocus></FormGroup>
      <Form.Label>Telja upp í ...</Form.Label>
      <InputDuration value={timerGoal} onChange={setTimerGoal}></InputDuration>
    </Modal>
  )
}

export default CreateTimerModal;