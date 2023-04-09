// import { connect } from "react-redux";
import React, { useState } from "react";
import {
  Card,
  CardBody,
  Form,
  Input,
  Button,
  Row,
  Col,
} from "reactstrap";

const AddPost = ({
  captions,
  addCaption,
  editCaption,
  removeAll,
}) => {
  const [inputCaption, setInputCaption] = useState("");

  const addPost = (e) => {
    e.preventDefault();
    if (!inputCaption) {
      return;
    }
    const newCaption = {
      id: new Date().getTime().toString(),
      name: inputCaption,
    };
    addCaption(newCaption);
    setInputCaption("");
  };

  const handleEdit = (caption) => {
    const newCaption = {
      ...caption,
      name: inputCaption,
    };
    setInputCaption("");
    editCaption(newCaption);
    
  };

  const deletePost = (index) => {
    // Filtering out on basis of id
    const updatedposts = captions.filter((elem) => {
      return index !== elem.id;
    });
  };

  return (
    <div>
      <div className="wrapper">
        <Card className="shadow-sm my-4 border-0">
          <CardBody>
            <h4>What's New in Your Life ?</h4>

            <Form>
              <div className="mt-4">
                <label>Upload Image</label>
              </div>
              <div className="my-2">
                <Input type="file" id="image" multiple />
              </div>
              <div className="my-2">
                <Input
                  type="text"
                  placeholder="Caption"
                  value={inputCaption}
                  onChange={(e) => setInputCaption(e.target.value)}
                />
              </div>
              <Button color="primary" onClick={addPost}>
                Create Post
              </Button>
            </Form>
          </CardBody>
        </Card>
      </div>

      <Row>
        <Col className="">
          <h3>My Feed</h3>
        </Col>
        <Col className="text-end">
          <Button color="danger" onClick={removeAll}>
            Remove Everything
          </Button>
        </Col>
      </Row>

      <div className="wrapper">
        {captions.map((elem) => {
          // Here we are returning the data after userInput is given
          return (
            <Card className="shadow-sm my-4 border-0" key={elem.id}>
              <CardBody>
                <Form>
                  <div className="my-2">
                    <h5>{elem.name}</h5>
                  </div>

                  {/* <Container className="text-center"> */}
                  <Button color="info" onClick={() => editCaption(elem.id)}>
                    Edit Caption
                  </Button>
                  <Button
                    color="danger"
                    className="mx-2"
                    onClick={() => deletePost(elem.id)}
                  >
                    Delete Post
                  </Button>
                  {/* </Container> */}

                  <Row className="mt-4">
                    <Col md={{ size: 10, offset: 0 }} className="mx-3">
                      <h5>Comments</h5>
                      <Card className="mt-2 border-0">
                        <CardBody>
                          <Input type="text" placeholder="Enter Comment here" />
                          <Button className="my-2" color="secondary">
                            Submit
                          </Button>
                        </CardBody>
                        <CardBody>
                          <Input type="text" placeholder="Your Comment" />
                          <Button className="my-2" color="info">
                            Edit
                          </Button>
                          <Button className="my-2 mx-2" color="danger">
                            Delete
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default AddPost;
