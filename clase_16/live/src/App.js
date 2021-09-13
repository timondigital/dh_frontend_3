import Home from "./components/Home";
import Main from "./components/Main";
import Article from "./components/Article";
import Faq from "./components/Faq";
import About from "./components/About";
import { Router, Route, browserHistory } from "react-router-3";

function App() {
  return (
    <div className="App">
      <Router history={browserHistory}>
        <Route path="/" component={Home}>
          <Route path="/main" component={Main} />
          <Route path="/faq" component={Faq} />
          <Route path="/about" component={About} />
        </Route>
        <Route path="/article/:id" component={Article}></Route>
      </Router>
    </div>
  );
}

export default App;
