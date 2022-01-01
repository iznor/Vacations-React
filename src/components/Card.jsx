import Form from "./Form.jsx";
import "./Card.scss";

function Card({ onClickEdit, onClickDelete }) {
  return (
    <>
      <div className="card">
        <div className="photo"></div>
        <div className="buttons">
          <button
            className="delete"
            onClick={() =>
              onClickDelete(alert("Delete This Card (from .json)"))
            }
          ></button>
          <button
            className="edit"
            onClick={() => onClickEdit(alert("Change Form State To 'Edit'"))}
          ></button>
        </div>
        <h4 className="destination">Phi Phi Islands</h4>
        <div className="location">
          <div className="marker"></div>
          <h5 className="country">Thailand</h5>
          <p className="price">$1,480</p>
        </div>
      </div>
    </>
  );
}

export default Card;
