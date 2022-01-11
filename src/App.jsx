import "./App.scss";
import data from "./data/data.json";
import Card from "./components/Card";
import SearchBar from "./components/SearchBar";
import Form from "./components/Form";
import { useState, useCallback } from "react";
import { Context } from "./store";
let lastId = 0;
const App = (props) => {
  const [cards, setCards] = useState(data);
  const [edit, setEdit] = useState(null);
  const [filter, setFilter] = useState("");

  const handleFilterChange = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };

  const renderCards = useCallback(() => {
    return cards.map((card) => {
      lastId++;
      const { id } = card;
      if (
        card.name.toLowerCase().includes(filter.toLowerCase()) ||
        card.location.toLowerCase().includes(filter.toLowerCase())
      ) {
        return <Card key={id} {...card} onDeleteClick={deleteCard} />;
      }
    });
  }, [cards, filter]);

  const setOrAddCard = (card) => {
    edit
      ? setCards((prevState) =>
          prevState.map((e) => (e.id === card.id ? { ...card } : e))
        )
      : setCards((prevState) => [...prevState, card]);
    setEdit(null);
  };

  const deleteCard = (cardId) => {
    setCards((prevState) => {
      return prevState.filter((card) => card.id !== cardId);
    });
    setEdit(null);
  };

  return (
    <Context.Provider value={{ edit, setEdit, setOrAddCard }}>
      <div className="App">
        <header className="header">
          <SearchBar handleChange={handleFilterChange} filter={filter} />
        </header>
        <div className="cards-list">
          <div className="container">{renderCards()}</div>
          <div className="container">
            <Form />
          </div>
        </div>
      </div>
    </Context.Provider>
  );
};
export { lastId };
export default App;
