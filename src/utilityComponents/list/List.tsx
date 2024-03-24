import ListGroup from "react-bootstrap/ListGroup";
import ListItem, { ListItemProps } from "./ListItem";

interface Props {
  variant?: 'flush';
  children: React.ReactElement<ListItemProps> | React.ReactElement<ListItemProps>[];
}

function List({ variant, children }: Props) {
  return (
    <ListGroup variant={variant}>
      {children}
    </ListGroup>
  );
}

export default Object.assign(List, {
  Item: ListItem,
});