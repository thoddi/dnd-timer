import { useContext, useState } from "react";
import { TimerContext } from "../contexts/AppContextProvider";

interface Props {
  durationId?: number;
  eventId?: number;
  logId?: number;
}

function CreateTimer({ durationId, eventId, logId }: Props) {
  const [name, setName] = useState('');
  const [timerGoal, setTimerGoal] = useState<number | null>(null);
  const timers = useContext(TimerContext);

  const onSave = () => {
    timers.add({ name, eventId, logId, durationId, finishAtInGameTime: timerGoal || undefined });
    setName('');
  };

  return (
    <div>
      Vista nýjan teljara.
      <input placeholder="Nafn" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Telja upp í..." value={timerGoal ?? undefined} onChange={(e) => setTimerGoal(Number(e.target.value) || null)} />
      <button onClick={onSave}>Vista</button>
    </div>
  )
}

export default CreateTimer;