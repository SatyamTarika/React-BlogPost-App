import Navbar from "./Navbar";
import AddPost from "./AddPost";
import { Container } from "reactstrap";

const Base = () => {
  return (
    <div className="container-fluid m-0 p-0">
      <Navbar />
      <Container>
        <AddPost />
      </Container>
    </div>
  );
};

export default Base;
