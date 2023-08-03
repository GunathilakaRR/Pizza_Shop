import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Homescreen from './screens/Homescreen';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Homescreen />
    </div>
  );
}

export default App;
