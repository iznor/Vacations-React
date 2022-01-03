import "./App.scss";
import Card from "./components/Card";
import SearchBar from "./components/SearchBar";
import Form from "./components/Form";
import { Children } from "react/cjs/react.production.min";
import { useState } from "react";
import { Context } from "./store";
function App() {
  const [edit, setEdit] = useState(null);
  return (
    <Context.Provider value={{ edit, setEdit }}>
      <div className="App">
        <header className="header">
          <SearchBar />
        </header>
        <div className="cards-list">
          <div className="container">
            <Card />
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
    </Context.Provider>
  );
}

export default App;
