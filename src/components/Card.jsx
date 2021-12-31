import "./Card.scss";

function Card({ onClickEdit }) {
  return (
    <>
      <div className="card">
        <div className="photo"></div>
        <div className="buttons">
          <button className="delete"></button>
          <button className="edit"></button>
        </div>
        <h4>Phi Phi Islands</h4>
        <div className="marker"></div>
        <h5>Thailand</h5>
        {/*sIbytates */}
        {/* <button onClick={() => onClickEdit && onClickEdit(5)}>edit</button> */}
      </div>
    </>
  );
}

export default Card;
