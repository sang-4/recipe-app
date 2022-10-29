import "react-toastify/dist/ReactToastify.css";
import Routes from "../src/routes/index"
import Container from "react-bootstrap/Container";

function App() {
  return (
      <Container className="container__recipe">
      <Routes />
    </Container>

  );
}

export default App;
