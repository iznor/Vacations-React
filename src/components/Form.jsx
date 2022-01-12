import "./Form.scss";
import { lastId } from "../App";
import { useContext, useState, useEffect } from "react";
import { editAtt, addAtt, Context } from "../store";
const Form = (props) => {
  const { edit, setEdit, setOrAddCard } = useContext(Context);
  const [formState, setFormState] = useState({
    id: "",
    name: "",
    location: "",
    price: "",
    url: "",
  });
  useEffect(() => {
    setFormState(
      edit || { id: "", name: "", location: "", price: "", url: "" }
    );
  }, [edit]);

  function addVacay(e) {
    e.preventDefault();
    setOrAddCard({
      ...formState,
      id: edit ? formState.id : lastId + 1,
    });
  }

  function handleChange(e) {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  return (
    <>
      <div className={`form-${edit ? "edit" : "add"}`}>
        <h1>
          {edit ? editAtt.map((e) => e.title) : addAtt.map((e) => e.title)}
        </h1>
        <form onSubmit={addVacay} onReset={() => setEdit(null)}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={formState.name}
            onChange={handleChange}
          />
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            placeholder="Location"
            value={formState.location}
            onChange={handleChange}
          />
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            placeholder="Price"
            value={formState.price}
            onChange={handleChange}
          />
          <label htmlFor="url">Image url</label>
          <input
            type="text"
            id="url"
            placeholder="Image url"
            value={formState.url}
            onChange={handleChange}
          />
          <div className="buttons">
            {edit
              ? editAtt.map((e) => e.buttons)
              : addAtt.map((e) => e.buttons)}
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
