import "bootstrap/dist/css/bootstrap.css";
import Spinner from "react-bootstrap/Spinner";

const Loading = () => {
  return (
    <>
      <h3 className="loading">
        Loading <Spinner animation="border" variant="primary" /> <br />
      </h3>
    </>
  );
};

export default Loading;
