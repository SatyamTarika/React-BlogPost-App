import "./App.css";
import Navbar from "./components/Navbar";
import AddPost from "./components/AddPost";
import { Container } from "reactstrap";
import { Provider } from "react-redux";
import store from "./state/Store";

function App() {
    return (
      <Provider store={store}>
        <div className="container-fluid m-0 p-0">
          <Navbar />
          <Container>
            <AddPost />
          </Container>
        </div>
      </Provider>
    );
}

export default App;
