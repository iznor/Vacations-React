import "./Form.scss";

const add = [
  {
    title: "Add a new vacation",
    buttons: <button className="add-button"></button>,
  },
];
const edit = [
  {
    title: "Edit a vacation",
    buttons: [
      <button className="discard-button"></button>,
      <button className="save-button"></button>,
    ],
  },
];

function Form({ onClickAdd, onClickDiscard, onClickSave }) {
  return (
    <>
      <div class="form-add">
        <h1>{add.map((e) => e.title)}</h1>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Name" />
          <label htmlFor="location">Location</label>
          <input type="text" id="location" placeholder="Location" />
          <label htmlFor="price">Price</label>
          <input type="text" id="price" placeholder="Price" />
          <label htmlFor="image-url">Image url</label>
          <input type="text" id="image-url" placeholder="Image url" />
          <div className="buttons">{add.map((e) => e.buttons)}</div>
        </form>
      </div>
    </>
  );
}

export default Form;
