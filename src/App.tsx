import React from "react";
import Navigation from "./component/Navigation";
import Resume from "./component/ResumeComponent/Resume";
import Portfolio from "./component/PortfolioComponent/portfolio";
import Contact from "./component/ContactComponent/Contact";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Main from "./component/IntroComponent/Home";
import Formation from "./component/FormationComponent/Formation";
import { ToastContainer } from "react-toastify";
import NoMatchPage from "./component/NoMatchPage";
import Projects from "./component/PortfolioComponent/Project/Projects";

import "react-toastify/dist/ReactToastify.css";
import "./css/App.css";


const App = (props:any) => {

  return (
    <div className="wrapper">
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Navigation />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/formation" component={Formation} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Route path={`/portfolio/:id`} render={(props) => <Projects dataProject={Portfolio} {...props} />} />
          <Route component={NoMatchPage} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
