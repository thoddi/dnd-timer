import { useContext, useState } from "react";
import Modal from "../../utilityComponents/Modal";
import { Form } from "react-bootstrap";
import InputDuration from "../../utilityComponents/InputDuration";
import { TimerContext } from "../../contexts/AppContextProvider";
import { SlInput } from "../../utilityComponents/SlInput";

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
    timers.add({ name, eventId, logId, durationId, finishAfterSeconds: timerGoal || undefined });
    onHide();
  };

  const onHide = () => {
    setName('');
    setTimerGoal(undefined);
    _onHide();
  };

  return (
    <Modal show={show} title="Vista nýjan teljara" onHide={onHide} primaryBtnText="Vista" onPrimaryBtnClick={onSave}>
      <SlInput label="Heiti teljara" value={name} onSlInput={(e: any) => setName(e.target.value)}></SlInput>
      <Form.Label>Telja upp í ...</Form.Label>
      <InputDuration value={timerGoal} onChange={setTimerGoal}></InputDuration>
    </Modal>
  )
}

export default CreateTimerModal;