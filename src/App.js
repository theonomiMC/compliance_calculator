import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeGeo from './HomeGeo'
import HomeEng from './HomeEng'
import Header from './Header';
import Footer from './Footer'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

const App = () => {

  return (
    <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={HomeGeo}/>
      <Route path="/eng-version" component={HomeEng}/>
      
    </Switch>
    
      <Footer />
    </Router>

  );
}

export default App;

