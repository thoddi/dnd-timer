import './App.css';
import CreateSpeed from './CreateSpeed';
import useInGameSpeed from './hooks/useInGameSpeed';
import useInGameDuration from './hooks/useInGameDuration';
import CreateDuration from './CreateDuration';
import useInGameTime from './hooks/useInGameTime';
import CreateEvent from './CreateEvent';
import useInGameEvents from './hooks/useInGameEvents';
import useInGameLogs from './hooks/useInGameLogs';
import CreateLog from './CreateLog';

function App() {
  const [time, setPlaySpeed, addTime] = useInGameTime();
  const [speedList, addSpeed] = useInGameSpeed();
  const [durationList, addDuration] = useInGameDuration();
  const [eventList, addEvent] = useInGameEvents();
  const [logList, addLog] = useInGameLogs();

  return (
    <div className="App">
      <div>
        {time}
        <button onClick={() => setPlaySpeed(0)}>Pause</button>
        <button onClick={() => setPlaySpeed(1)}>Play</button>
      </div>
      <hr />
      <CreateSpeed onAdd={addSpeed}></CreateSpeed>
      <hr />
      <div>
        {speedList.map((speed) => (
          <button key={speed.id} onClick={() => setPlaySpeed(speed.speed)}>{speed.name}</button>
        ))}
      </div>
      <hr />
      <CreateDuration onAdd={addDuration}></CreateDuration>
      <hr />
      <div>
        {durationList.map((duration) => (
          <button key={duration.id} onClick={() => addTime(duration.id)}>{duration.name}</button>
        ))}
      </div>
      <hr />
      <CreateEvent onAdd={addEvent}></CreateEvent>
      <hr />
      <div>
        {eventList.map((event) => (
          <button key={event.id} onClick={() => addTime(event.id)}>{event.name}</button>
        ))}
      </div>
      <hr />
      <CreateLog onAdd={(text: string) => addLog(text, time)}></CreateLog>
      <hr />
      <ul>
        {logList.map((log) => (
          <li key={log.id}>{log.text} | {log.inGameTime}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
