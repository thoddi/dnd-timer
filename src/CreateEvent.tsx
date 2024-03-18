import { useState } from "react";

interface Props {
  onAdd: (name: string) => void;
}

function CreateEvent({ onAdd }: Props) {
  const [name, setName] = useState('');

  const onSave = () => {
    onAdd(name);
    setName('');
  };

  return (
    <div>
      Vista nýjan atburð.
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onSave}>Vista</button>
    </div>
  )
}

export default CreateEvent;