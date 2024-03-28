import { ChangeEvent, useState } from "react";
import Dropdown from "react-bootstrap/esm/Dropdown";
import DropdownButton from "react-bootstrap/esm/DropdownButton";
import Form from "react-bootstrap/esm/Form";
import InputGroup from "react-bootstrap/esm/InputGroup";
import { unitsOfTime } from "../unitsOfTime";

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