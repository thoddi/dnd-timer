import { useState } from "react";
import { Timer } from "../contexts/AppContext.type";
import { Create } from "../hooks/useLocalStorageList";

interface Props {
  durationId?: number;
  eventId?: number;
  logId?: number;
  onAdd: (item: Create<Timer>) => void;
}

function CreateTimer({ durationId, eventId, logId, onAdd }: Props) {
  const [name, setName] = useState('');
  const [timerGoal, setTimerGoal] = useState<number>();

  const onSave = () => {
    onAdd({ name, eventId, logId, durationId, finishAtInGameTime: timerGoal || undefined });
    setName('');
  };

  return (
    <div>
      Vista nýjan teljara.
      <input placeholder="Nafn" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Telja upp í..." value={timerGoal} onChange={(e) => setTimerGoal(Number(e.target.value) || undefined)} />
      <button onClick={onSave}>Vista</button>
    </div>
  )
}

export default CreateTimer;