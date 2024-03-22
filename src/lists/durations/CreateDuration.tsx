import { useState } from "react";
import { AddFunction } from "../../hooks/useLocalStorageList";
import { Duration } from "../../contexts/AppContext.type";

interface Props {
  onAdd: AddFunction<Duration>;
}

function CreateDuration({ onAdd }: Props) {
  const defaultDuration = 3600; // 1 hour
  const [name, setName] = useState('');
  const [duration, setDuration] = useState(defaultDuration); // 1 hour

  const onSave = () => {
    onAdd({ name, duration });
    setName('');
    setDuration(defaultDuration);
  };

  return (
    <div>
      Vista nýtt tímabil.
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input type="number" value={duration} onChange={(e) => setDuration(Number(e.target.value))} />
      <button onClick={onSave}>Vista</button>
    </div>
  )
}

export default CreateDuration;