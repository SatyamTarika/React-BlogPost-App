import React from "react";
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
  return (
    <div className="wrapper">
      <Card className="shadow-sm my-4 border-0">
        <CardBody>
          <h4>What's New in Your Life ?</h4>

          <Form>
            <div className="mt-4">
              <label for="image">Upload Image</label>
            </div>
            <div className="my-2">
              <Input type="file" id="image" multiple />
            </div>
            <div className="my-2">
              <Input type="text" placeholder="Caption" />
            </div>

            <Container className="text-center">
              <Button color="primary">Create Post</Button>
            </Container>

            <Row className="mt-4">
              <Col md={{ size: 10, offset: 0 }} className="mx-4">
                <h5>Comments</h5>
                <Card className="mt-2 border-0">
                  <CardBody>
                    <Input type="text" placeholder="Enter Comment here" />
                    <Button className="my-2 mx-1" color="secondary">
                      Submit
                    </Button>
                    <Button className="my-2 mx-1" color="info">
                      Edit
                    </Button>
                    <Button className="my-2 mx-1" color="danger">
                      Delete
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default AddPost;
