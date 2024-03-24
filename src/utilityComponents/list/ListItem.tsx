import ListGroupItem from "react-bootstrap/ListGroupItem";

export interface ListItemProps {
  className?: string;
  children: React.ReactNode;
}

function ListItem({ className, children }: ListItemProps) {
  return (
    <ListGroupItem className={className}>
      {children}
    </ListGroupItem>
  );
}

export default ListItem;