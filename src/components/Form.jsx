import "./Form.scss";
import { useContext } from "react";
import { editAtt, addAtt, Context } from "../store";
function Form() {
  const { edit, setEdit } = useContext(Context);

  const { destination, country, price, imageUrl } = edit || {
    destination: null,
    country: null,
    price: null,
    imageUrl: null,
  };
  return (
    <>
      <div className={`form-${edit ? "edit" : "add"}`}>
        <h1>
          {edit ? editAtt.map((e) => e.title) : addAtt.map((e) => e.title)}
        </h1>
        <form>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            defaultValue={destination}
          />
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            placeholder="Location"
            defaultValue={country}
          />
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            placeholder="Price"
            defaultValue={price}
          />
          <label htmlFor="image-url">Image url</label>
          <input
            type="text"
            id="image-url"
            placeholder="Image url"
            defaultValue={imageUrl}
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
}

export default Form;
