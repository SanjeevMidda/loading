import './index.css';
import Blob from './components/Blob';

function App() {
  return (
    <div className="App">
     <Blob color="blue"/>
     <Blob color="orange" animation="movement 1s 1s forwards infinite alternate"/>
     <Blob color="green" animation="movement 1.3s 2s forwards infinite alternate"/>
     <Blob color="purple" animation="movement 1.6s 3s forwards infinite alternate"/>
     <Blob color="grey" animation="movement 1.9s 4s forwards infinite alternate"/>
    </div>
  );
}

export default App;
