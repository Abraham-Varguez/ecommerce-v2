import { Spinner } from "react-bootstrap";

//Loading Spinner Component

const Loader = () => {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        width: "100px",
        height: "100px",
        margin: "auto",
        display: "block",
      }}
    />
  );
};

export default Loader;
