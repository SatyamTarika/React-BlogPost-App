import React, { useState } from "react";
import {
  Card,
  CardBody,
  Form,
  Input,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

const AddPost = () => {
  const [inputCaption, setInputCaption] = useState("");
  const [captions, setCaptions] = useState([]); // Here empty array means , item ki jo values hongi initially empty array hongi
  const [toggleEdit, submitToggleEdit] = useState(true);

  const addCaption = () => {
    if (!inputCaption) {
      // putting validation on input, if no input then do nothing
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: inputCaption,
      }; // using date to generate unique id
      setCaptions([...captions, allInputData]); // ... is spread operator to retain previous entered data inside array
      setInputCaption(""); // khali de rahe hai, so that pehle vaala variable empty ho sake
    }
  };

  //edit captions
  const editCaption = (id) => {
    const newcaption = captions.find((elem) => {
      return (
        elem.id === id,
        <Form>
          <div className="my-2">
            <Input
              type="text"
              placeholder="Edit Caption"
              value={newcaption.name}
              onChange={(e) => setInputCaption(e.target.value)}
            />
          </div>
        </Form>
      );
    });
  };

  // to delete theparticular post, we need specific unique id for that post, for which we can use ind in map()
  const deletePost = (index) => {
    // jis post ki id hmare paas hai, leaving it baaki saari posts hame show krni hai ab
    const updatedposts = captions.filter((elem) => {
      return index != elem.id;
    });
    setCaptions(updatedposts);
  };

  // remove all posts

  const removeall = () => {
    setCaptions([""]);
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
                  // Here we are getting the updated inputValue from client and set it using useState on line 15
                  // Then we will set this state in another variable in form of array also when we click on create Post, so that we can clear this variable if needed and store the data through other variable
                  onChange={(e) => setInputCaption(e.target.value)}
                />
              </div>
              <Button color="primary" onClick={addCaption}>
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
          <Button color="danger" onClick={removeall}>
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
