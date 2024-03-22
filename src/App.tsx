import './App.css';
import Logs from './logs/Logs';
import Time from './time/Time';
import Lists from './lists/Lists';
import AppContextProvider from './contexts/AppContextProvider';
import Timers from './timers/Timers';

function App() {

  return (
    <AppContextProvider>
      <div className="App">
        <Logs></Logs>
        <div>
          <Time></Time>
          <Timers></Timers>
        </div>
        <Lists></Lists>
      </div>
      </AppContextProvider>
  );
}

export default App;
