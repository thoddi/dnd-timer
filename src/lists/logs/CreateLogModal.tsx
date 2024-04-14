import { useContext, useState } from "react";
import Modal from "../../utilityComponents/Modal";
import { LogContext, TimeContext } from "../../contexts/AppContextProvider";
import { SlInput } from "../../utilityComponents/SlInput";

interface Props {
  show: boolean;
  onHide(): void;
}

function CreateLogModal({ show, onHide: _onHide }: Props) {
  const [text, setText] = useState('');

  const { add } = useContext(LogContext);
  const { time } = useContext(TimeContext);

  const onSave = () => {
    add({ text, inGameTime: time });
    onHide();
  };

  const onHide = () => {
    setText('');
    _onHide();
  };

  return (
    <Modal show={show} title="Skrá nýjan atburð" onHide={onHide} primaryBtnText="Vista" onPrimaryBtnClick={onSave}>
      <SlInput label="Heiti atburðar" value={text} onSlInput={(e: any) => setText(e.target.value)} autoFocus></SlInput>
    </Modal>
  )
}

export default CreateLogModal;