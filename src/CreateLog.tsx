import { useState } from "react";

interface Props {
  onAdd: (name: string) => void;
}

function CreateLog({ onAdd }: Props) {
  const [text, setText] = useState('');

  const onSave = () => {
    onAdd(text);
    setText('');
  };

  return (
    <div>
      Vista nýja skráningu.
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={onSave}>Vista</button>
    </div>
  )
}

export default CreateLog;