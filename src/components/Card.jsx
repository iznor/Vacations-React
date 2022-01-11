import Form from "./Form.jsx";
import "./Card.scss";
import { useContext } from "react";
import { editAtt, addAtt, Context } from "../store";
import { lastId } from "../App.jsx";
import { data } from "../data/data.json";
function Card({ id, name, location, price, url, onDeleteClick }) {
  const { edit, setEdit } = useContext(Context);

  return (
    <>
      <div className="card">
        <div className="photo" style={{ backgroundImage: `url(${url})` }}></div>
        <div className="buttons">
          <button className="delete" onClick={() => onDeleteClick(id)}></button>
          <button
            className="edit"
            onClick={() => setEdit({ id, name, location, price, url })}
          ></button>
        </div>
        <h4 className="destination">{name}</h4>
        <div className="location">
          <div className="marker"></div>
          <h5 className="country">{location}</h5>
          <p className="price">{price}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
