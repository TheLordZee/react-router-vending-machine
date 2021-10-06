import { BrowserRouter, Route } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Candy from './Candy';
import Soda from './Soda';
import Navbar from './Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <Route exact path="/">
        <VendingMachine />
      </Route>
      <Route exact path="/chips">
        <Chips />
      </Route>
      <Route exact path="/Candy">
        <Candy />
      </Route>
      <Route exact path="/soda">
        <Soda />
      </Route>
    </BrowserRouter>
    </div>
  );
}

export default App;
