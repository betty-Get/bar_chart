import logo from './logo.svg';
import './App.css';
import BarChart from './pages/BarChart';
import NewData from './pages/NewData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <BarChart/> */}
        <NewData/>
      </header>
    </div>
  );
}

export default App;
