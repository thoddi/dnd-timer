import { useContext, useState } from "react";
import Modal from "../Modal";
import CreateLog from "./CreateLog";
import { LogContext, TimeContext } from "../contexts/AppContextProvider";
import LogItem from "./LogItem";

function Logs() {
  const [isCreating, setIsCreating] = useState(false);

  const logs = useContext(LogContext);
  const { time } = useContext(TimeContext);

  const onAdd = (text: string) => {
    logs.add({ text, inGameTime: time });
  };

  return (
    <div className="logs" style={{ margin: 10, borderRight: '1px solid grey' }}>
      <h2>Atburðir</h2>
      <button onClick={() => setIsCreating(true)}>Skrá nýjan atburð</button>
      {[...logs.list].reverse().map((log) => (
        <LogItem key={log.id} id={log.id} text={log.text} inGameTime={log.inGameTime}></LogItem>)
      )}
      {isCreating && (
        <Modal onClose={() => setIsCreating(false)}>
          <CreateLog onAdd={onAdd}></CreateLog>
        </Modal>
      )}
    </div>
  );
}

export default Logs;