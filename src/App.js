import "react-toastify/dist/ReactToastify.css";
import Routes from "./routes/MainRoutes";
import Container from "react-bootstrap/Container";
import { ToastContainer } from "react-toastify";



function App() {
  return (
    
  
    <Container className="container__recipe">
      <ToastContainer />
      <Routes />
    </Container>
  );
}

export default App;
