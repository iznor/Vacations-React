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
        <h4 className="destination">Phi Phi Islands</h4>
        <div className="location">
          <div className="marker"></div>
          <h5 className="country">Thailand</h5>
          <p className="price">$1,480</p>
        </div>
        {/*sIbytates */}
        {/* <button onClick={() => onClickEdit && onClickEdit(5)}>edit</button> */}
      </div>
    </>
  );
}

export default Card;
