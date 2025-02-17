import "./App.css";

import React, { Component } from "react";
import NavBar from "./component/NavBar";
import News from "./component/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route
              path="/business"
              element={<News pageSize={5} country="us" category="business" />}
            />

            {/* </Route> */}
            <Route
              path="/entertainment"
              element={<News pageSize={5} country="us" category="entertainment" />}
            />
             <Route
              path="/general"
              element={<News pageSize={5} country="us" category="general" />}
            />
             <Route
            path="/health"
            element={<News pageSize={5} country="us" category="health" />}
          />
           <Route
              path="/science"
              element={<News pageSize={5} country="us" category="science" />}
            />
             <Route
              path="/sports"
              element={<News pageSize={5} country="us" category="sports" />}
            />
             <Route
              path="/technology"
              element={<News pageSize={5} country="us" category="technology" />}
            />

            {/* </Route> */}
          </Routes>

          {/* <News pageSize={5} country="us" category="technology" /> */}
        </Router>
      </div>
    );
  }
}
