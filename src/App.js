import "react-toastify/dist/ReactToastify.css";
import Routes from "../src/routes/index"
import Container from "react-bootstrap/Container";
import Procedure from "./pages/Procedure";
import SingleRecipe from "./pages/SingleRecipe";



function App() {
  return (
    
    <Container className="container__recipe">
      <Routes />
    </Container>
    
  );
}

export default App;
