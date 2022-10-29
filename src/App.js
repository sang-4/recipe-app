import "react-toastify/dist/ReactToastify.css";
import Routes from "../src/routes/index"
import Container from "react-bootstrap/Container";
import SingleRecipe from "./pages/SingleRecipe";
import Procedure from "./pages/Procedure";

function App() {
  return (
    //   <Container className="container__recipe">
    //   <Routes />
    // </Container>

    <div>
      <Procedure/>
      <SingleRecipe/>
    </div>

  );
}

export default App;
