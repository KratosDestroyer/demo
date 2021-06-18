import './App.css';
import Homepage from './pages/homepage';
import CaseStudy from './pages/wiscon-products-case-study';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div >
      
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/wiscon-products-case-study" component={CaseStudy}/>
      </Switch>

    </div>
  );
}

export default App;
