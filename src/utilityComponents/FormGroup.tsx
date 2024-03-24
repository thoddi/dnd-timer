import { ChangeEvent } from "react";
import Form from "react-bootstrap/Form";

interface BaseProps {
  label?: string;
  placeholder?: string;
  text?: string;
  autoFocus?: boolean;
}

interface StringProps extends BaseProps {
  type: 'text';
  value: string;
  onChange(value: string): void 
}

interface NumberProps extends BaseProps {
  type: 'number';
  value?: number;
  onChange(value?: number): void;
}

interface UndefinedProps extends Omit<StringProps, 'type'> {
  type?: undefined;
};

type InputType = StringProps | NumberProps | UndefinedProps;

function FormGroup({ type, label, value, onChange: _onChange, placeholder, text, autoFocus }: InputType) {

  const onChange = ({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
    if (type === 'number') {
      if (currentTarget.value) {
        _onChange((Number(currentTarget.value) || value) ?? 0);
      } else {
        _onChange(undefined);
      }
    } else {
      _onChange(currentTarget.value);
    }
  }

  return (
    <Form.Group>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control autoFocus={autoFocus} type={type === 'number' ? 'text' : type} placeholder={placeholder} value={value} onChange={onChange} />
      {text && (
        <Form.Text className="text-muted">
          {text}
        </Form.Text>
      )}
    </Form.Group>
  );
}

export default FormGroup;