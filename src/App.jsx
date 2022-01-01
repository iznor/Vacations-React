import "./App.scss";
import Card from "./components/Card";
import SearchBar from "./components/SearchBar";
import Form from "./components/Form";
import { Children } from "react/cjs/react.production.min";
import { useState } from "react";
function App() {
  const [edit, setEdit] = useState(""); //states
  return (
    <div className="App">
      <header className="header">
        <SearchBar />
      </header>
      <div className="cards-list">
        <div className="container">
          {edit}
          <Card onClickEdit={setEdit} />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="container">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
