import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Card(props) {
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {props.card.name}
          </h5>
          <h6 className="card-price text-center">
            ${props.card.price}
            <span className="period">/month</span>
          </h6>
          <hr />
          <ul className="fa-ul">
            {props.card.feature.map((item) => {
              {
                if (item.boolean == true) {
                  return (
                    <li>
                      <span className="fa-li">
                        <FontAwesomeIcon icon={faCheck} />
                      </span>
                      <strong>{item.line}</strong>
                    </li>
                  );
                } else {
                  return (
                    <li>
                      <span className="fa-li text-muted">
                        <FontAwesomeIcon icon={faXmark} />
                      </span>
                      {item.line1}
                    </li>
                  );
                }
              }
            })}
          </ul>

          <div className="d-grid">
            <a href="#" className="btn btn-primary text-uppercase">
              Button
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;