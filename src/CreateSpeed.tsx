import { useState } from "react";

interface Props {
  onAdd: (name: string, speed: number) => void;
}

function CreateSpeed({ onAdd }: Props) {
  const [name, setName] = useState('');
  const [speed, setSpeed] = useState(1);

  const onSave = () => {
    onAdd(name, speed);
    setName('');
    setSpeed(1);
  };

  return (
    <div>
      Vista nýjan tímahraða.
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input type="number" value={speed} onChange={(e) => setSpeed(Number(e.target.value))} />
      <button onClick={onSave}>Vista</button>
    </div>
  )
}

export default CreateSpeed;