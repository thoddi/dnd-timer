import { ChangeEvent, useState } from "react";
import { FormControlProps } from "react-bootstrap";
import Dropdown from "react-bootstrap/esm/Dropdown";
import DropdownButton from "react-bootstrap/esm/DropdownButton";
import Form from "react-bootstrap/esm/Form";
import InputGroup from "react-bootstrap/esm/InputGroup";

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
  value?: number;
  onChange(value: number): void;
}

function InputDuration({ value, onChange: _onChange }: Props) {
  // Finnum stærstu tímaeininguna sem er ekki með fleiri sekúndur en value.
  const [unit, setUnit] = useState(Object.entries(unitsOfTime).reverse().find(([, value]) => value.seconds <= 3600)?.[0] ?? 'seconds');

  const onChange = ({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
    const currentValue = Number(currentTarget.value);
    _onChange(currentValue * unitsOfTime[unit].seconds);
  };

  return (
    <InputGroup>
      <Form.Control type="number" value={value ? value / unitsOfTime[unit].seconds : ''} onChange={onChange} />
      <DropdownButton
        variant="outline-secondary"
        align="end"
        title={unitsOfTime[unit].name}>
          {Object.entries(unitsOfTime).map(([key, value]) => (
            <Dropdown.Item active={unit === key} onClick={() => setUnit(key)}>{value.name}</Dropdown.Item>
          ))}
      </DropdownButton>
    </InputGroup>
  );
}

export default InputDuration;