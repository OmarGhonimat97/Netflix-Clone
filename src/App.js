import { Routes, Route } from "react-router-dom";
// import NavBar from "./components/NavBar";
import Home from "./Components/Home";
// import FavRecipe from "./components/FavRecipe";

function App() {
  return (
    <>
      <h1>Welcome to Movies Web app</h1>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;


{/* <Route path="favRecipes" element={<FavRecipe />} /> */}


{/* <div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
</div> */}