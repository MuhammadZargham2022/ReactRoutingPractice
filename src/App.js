import './App.css';
import Sidebar from './Components/Sidebar';
import Routing from './Routing/Routing';


function App() {
  return (
    <>
      <div className="App">
        <div className="routing">
          <Routing />
        </div>
        <div className="sidebar">
          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default App;
