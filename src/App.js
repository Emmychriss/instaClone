import "./App.css";

import Nav from "./components/nav/Nav";
import Bio from "./components/Bio/Bio";
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <>
      <Nav />
      <div className="App">
        <Bio />
        <Gallery/>
      </div>
    </>
  );
}

export default App;
