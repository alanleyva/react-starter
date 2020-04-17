import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/font-awesome.css";
import "./css/app.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
import ScrollToTop from "./middleware/scrollTop";
import * as serviceWorker from "./serviceWorker";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <div>
          <Header />
          <Route exact path="/" component={Main} />
          <Footer />
        </div>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
