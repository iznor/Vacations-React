import logo from "./assets/img/add-icon.svg";
import "./App.scss";
import Card from "./components/Card";
// import { useState } from "react";
function App() {
  // const [edit, setEdit] = useState(99999); //states
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="search-bar" alt="search" />
      </header>
      <div className="main">
        <div className="container content">
          {/* {edit} */}
          <Card onClickEdit /*={setEdit}*/ />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="container actions">B</div>
      </div>
    </div>
  );
}

export default App;
