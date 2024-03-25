import { useContext, useState } from "react";
import FormGroup from "../../utilityComponents/FormGroup";
import Modal from "../../utilityComponents/Modal";
import { DurationContext } from "../../contexts/AppContextProvider";
import InputGroup from "react-bootstrap/esm/InputGroup";
import DropdownButton from "react-bootstrap/esm/DropdownButton";
import Dropdown from "react-bootstrap/esm/Dropdown";
import Form from "react-bootstrap/esm/Form";

interface TimeUnit {
  name: string;
  seconds: number;
}
interface UnitsOfTime {
  [key: string]: TimeUnit;
}

const unitsOfTime: UnitsOfTime = {
  seconds: {
    name: 'sekúndur',
    seconds: 1,
  },
  minutes: {
    name: 'mínútur',
    seconds: 60,
  },
  hours: {
    name: 'klukkutímar',
    seconds: 3_600,
  },
  days: {
    name: 'dagar',
    seconds: 86_400,
  },
  months: {
    name: 'mánuðir',
    seconds: 2_592_000, // 30 dagar
  },
  years: {
    name: 'ár',
    seconds: 31_104_000,
  },
};

interface Props {
  show: boolean;
  onHide(): void;
}

function CreateDurationModal({ show, onHide: _onHide }: Props) {
  const [name, setName] = useState('');
  const [duration, setDuration] = useState(1);
  const [unit, setUnit] = useState('hours');

  const { add } = useContext(DurationContext);

  const onSave = () => {
    add({ name, duration: duration * unitsOfTime[unit].seconds });
    onHide();
  };

  const onHide = () => {
    _onHide();
    setName('');
    setDuration(1);
  };


  return (
    <Modal show={show} title="Vista nýtt tímabil" onHide={onHide} primaryBtnText="Vista" onPrimaryBtnClick={onSave}>
      <FormGroup label="Heiti" value={name} onChange={setName}></FormGroup>
      <Form.Label>Tímalengd</Form.Label>
      <InputGroup>
        <Form.Control type="number" value={duration} onChange={({ currentTarget }) => setDuration(Number(currentTarget.value))} />
        <DropdownButton
          variant="outline-secondary"
          align="end"
          title={unitsOfTime[unit].name}>
            {Object.entries(unitsOfTime).map(([key, value]) => (
              <Dropdown.Item active={unit === key} onClick={() => setUnit(key)}>{value.name}</Dropdown.Item>
            ))}
        </DropdownButton>
      </InputGroup>
      
    </Modal>
  )
}

export default CreateDurationModal;