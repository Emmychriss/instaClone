import "./App.css";

import Nav from "./components/nav/Nav";
import Bio from "./components/Bio/Bio";

function App() {
  return (
    <>
      <Nav />
      <div className="App">
        <Bio />
      </div>
    </>
  );
}

export default App;
