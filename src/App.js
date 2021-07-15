import './App.css';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Layout from './Components/Shared/Layout/Layout';
import Home from './Components/Home/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route path="/" component={Home}/>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
