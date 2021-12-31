import "./Form.scss";

function Form({ onClickEdit }) {
  return (
    <>
      <div class="form">
        <h1>Title</h1>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Name" />
          <label htmlFor="location">Location</label>
          <input type="text" id="location" placeholder="Location" />
          <label htmlFor="price">Price</label>
          <input type="text" id="price" placeholder="Price" />
          <label htmlFor="image-url">Image url</label>
          <input type="text" id="image-url" placeholder="Image url" />
        </form>
      </div>
    </>
  );
}

export default Form;
