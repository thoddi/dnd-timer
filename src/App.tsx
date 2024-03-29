import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import LogList from './lists/logs/LogList';
import Time from './time/Time';
import Lists from './lists/Lists';
import AppContextProvider from './contexts/AppContextProvider';
import TimerList from './lists/timers/TimerList';

function App() {

  return (
    <div className="App">
      <AppContextProvider>
        <LogList></LogList>
        <div style={{ flex: 1 }}>
          <Time></Time>
          <TimerList></TimerList>
        </div>
        <Lists></Lists>
      </AppContextProvider>
    </div>
  );
}

export default App;
