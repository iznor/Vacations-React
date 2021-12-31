import logo from "./assets/img/add-icon.svg";
import "./App.scss";
import Card from "./components/Card";
// import { useState } from "react";
function App() {
  // const [edit, setEdit] = useState(99999); //states
  return (
    <div className="App">
      <header className="header">
        <div className="search-bar" alt="search">
          <input type="text" placeholder="Search by name or location" />
          <button className="search-button"></button>
        </div>
      </header>
      <div className="cards-list">
        <div className="container content">
          {/* {edit} */}
          <Card onClickEdit /*={setEdit}*/ />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="container actions">LIST SECTION</div>
      </div>
    </div>
  );
}

export default App;
