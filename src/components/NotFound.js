import { useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();
  return (
    <div className="not-found">
      <h2>Not Found</h2>
      <p>The Page Not Found</p>
      <button onClick={() => history.push("/")}>Back to Homepage</button>
    </div>
  );
};

export default NotFound;
