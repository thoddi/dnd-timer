import './App.css';
import Logs from './logs/Logs';
import Time from './time/Time';
import Lists from './lists/Lists';
import AppContextProvider from './contexts/AppContextProvider';

function App() {

  return (
    <AppContextProvider>
      <div className="App">
        <Logs></Logs>
        <Time></Time>
        <Lists></Lists>
      </div>
      </AppContextProvider>
  );
}

export default App;
