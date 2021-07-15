import './App.css';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Layout from './Components/Shared/Layout/Layout';
import Home from './Components/Home/Home';
import { useState } from 'react';
import Data from './data.json';


function App() {
  const [selected, setSelected] = useState("one");
  const data = Data[selected];
  return (
    <div className="App">
      <Router>
        <Layout selected={selected} setSelected={setSelected}>
          <Switch>
            <Route path="/">
              <Home data={data} selected={selected} />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
