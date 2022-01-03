import Form from "./Form.jsx";
import "./Card.scss";
import { useContext } from "react";
import { editAtt, addAtt, Context } from "../store";
function Card({ onClickEdit, onClickDelete }) {
  const card = {
    destination: "Phi Phi Islands",
    country: "Thailand",
    price: "$1,480",
    imageUrl: "https://picsum.photos/300",
  };
  const { destination, country, price, imageUrl } = card;
  const { edit, setEdit } = useContext(Context);
  return (
    <>
      <div className="card">
        <div
          className="photo"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className="buttons">
          <button
            className="delete"
            onClick={() => alert("Delete This Card (from .json)")}
          ></button>
          <button className="edit" onClick={() => setEdit(card)}></button>
        </div>
        <h4 className="destination">{destination}</h4>
        <div className="location">
          <div className="marker"></div>
          <h5 className="country">{country}</h5>
          <p className="price">{price}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
