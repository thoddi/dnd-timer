import { useContext, useState } from "react";
import { TimerContext } from "../contexts/AppContextProvider";
import Modal from "../utilityComponents/Modal";
import FormGroup from "../utilityComponents/FormGroup";

interface Props {
  show: boolean;
  onHide(): void;
  durationId?: number;
  eventId?: number;
  logId?: number;
}

function CreateTimerModal({ show, onHide, durationId, eventId, logId }: Props) {
  const [name, setName] = useState('');
  const [timerGoal, setTimerGoal] = useState<number>();
  const timers = useContext(TimerContext);

  const onSave = () => {
    timers.add({ name, eventId, logId, durationId, finishAtInGameTime: timerGoal || undefined });
    setName('');
  };

  return (
    <Modal show={show} title="Vista nýjan teljara" onHide={onHide} primaryBtnText="Vista" onPrimaryBtnClick={onSave}>
      <FormGroup label="Heiti teljara" value={name} onChange={setName} autoFocus></FormGroup>
      <FormGroup type="number" label="Telja upp í ..." value={timerGoal} onChange={setTimerGoal}></FormGroup>
    </Modal>
  )
}

export default CreateTimerModal;