import "./Card.scss";

function Card({ onClickEdit }) {
  return (
    <>
      <div className="card">
        <div className="photo"></div>
        <div className="buttons">
          <button className="edit"></button>
          <button className="delete"></button>
        </div>
        <h1>Iby</h1>
        {/*sIbytates */}
        {/* <button onClick={() => onClickEdit && onClickEdit(5)}>edit</button> */}
      </div>
    </>
  );
}

export default Card;
