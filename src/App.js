import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import './css/App.css';
import Navbar from "./components/layout/Navbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Detail from "./components/pages/Detail";
import Alert from "./components/layout/Alert";
import NotFound from "./components/layout/NotFound";

function App({alert}) {
  return (
    <Router>
        <Fragment>
          <Navbar />
          <div className="container">
              <Alert alert={alert}/>
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/user/:login" component={Detail} />
                  <Route component={NotFound} />
              </Switch>
          </div>
        </Fragment>
    </Router>
  )
}

const mapStateToProps = (state, ownProps) => ({
    alert: state.alert
});

export default connect(mapStateToProps)(App);
