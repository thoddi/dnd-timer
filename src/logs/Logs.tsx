import { useContext, useState } from "react";
import Modal from "../Modal";
import CreateLog from "./CreateLog";
import { LogContext, TimeContext } from "../contexts/AppContextProvider";

function Logs() {
  const [isCreating, setIsCreating] = useState(false);

  const { logs, addLog } = useContext(LogContext);
  const { time } = useContext(TimeContext);

  const onAdd = (text: string) => {
    addLog({ text, inGameTime: time });
  };

  return (
    <div className="logs" style={{ margin: 10, borderRight: '1px solid grey' }}>
      <h2>Atburðir</h2>
      <button onClick={() => setIsCreating(true)}>Skrá nýjan atburð</button>
      {logs.map((log) => (
        <div key={log.id} style={{ display: 'flex', margin: 5, padding: 5, borderTop: '1px solid grey' }}>
          <div>
            {log.text}
          </div>
          <div>
            
          </div>
        </div>
      ))}
      {isCreating && (
        <Modal onClose={() => setIsCreating(false)}>
          <CreateLog onAdd={onAdd}></CreateLog>
        </Modal>
      )}
    </div>
  );
}

export default Logs;