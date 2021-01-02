import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Portfolio from "./pages/Portfolio";
import KiwiCodes from "./pages/KiwiCodes";
import Architecture from "./pages/Architecture";
import Hobbies from "./pages/Hobbies";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Main>
          <Route exact path='/' component={Home} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/education' component={Education} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/kiwicodes' component={KiwiCodes} />
          <Route exact path='/architecture' component={Architecture} />
          <Route exact path='/hobbies' component={Hobbies} />
          <Route exact path='/contact' component={Contact} />
        </Main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
