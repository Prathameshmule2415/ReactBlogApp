import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Headerbar from "./Headerbar";
import Maincontent from "./Maincontent";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Headerbar />
        <Maincontent />
        <Footer />
      </div>
    );
  }
}
export default App;
