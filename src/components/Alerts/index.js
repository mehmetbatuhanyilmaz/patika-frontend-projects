import { useBasket } from "../../contexts/BasketContext";
import { Alert } from "react-bootstrap";
import "./style.css";

function Alerts() {
  const { alert, setAlert } = useBasket();

  if (alert.status) {
    return (
      <div className="alertsLoc">
        <Alert variant={alert.color} className="alertStyle">
          <h5>
            <small> {alert.status} </small>
          </h5>

          <small>{alert.description}</small>
        </Alert>
      </div>
    );
  } else {
    return <small></small>;
  }
}

export default Alerts;
