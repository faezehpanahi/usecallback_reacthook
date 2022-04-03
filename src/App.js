import "./App.css";
import ParentComponent from "./Components/ParentComponent/ParentComponent";
import contextAPI from "./Components/contextAPI/contextAPI";

function App() {
  return (
    <div className="app">
      {/* <contextAPI.Provider value={{text}}> */}
      <ParentComponent />
      {/* </contextAPI.Provider> */}
    </div>
  );
}

export default App;
