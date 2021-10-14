import React from 'react';
import {
  Container,
  Row,
  Col,
  Input,
  Button,
  Card,
  CardTitle,
  CardText,
  Form,
} from 'reactstrap';

//I want space between button and inputs, container to be centered in the screen, better way for centering and sizing Col, text to not touch side walls of container

const Login = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
    if (props.playerLevel === undefined || props.modifier === undefined) {
      alert("Enter your character's info");
    } else {
      props.onSubmit(e);
    }
  };
  // EXPERIMENT props.thing.logIn[1](); making state an object, to cut down on the amount of states being passed around components
  return (
    <Container>
      <Row>
        <Col md={4} />
        <Col md={4}>
          <Form
            onSubmit={submitHandler}
            className="text-center d-flex justify-content-center align-content-center "
          >
            <Card body color="">
              <CardTitle tag="h4">Character Info</CardTitle>
              <CardText>
                As of right now, this is an app for tracking spell casts of a
                Cleric.
              </CardText>
              <Row>
                <Col md={3} />
                <Col md={6}>
                  <Input
                    autoFocus
                    placeholder="Level"
                    className="text-center"
                    type="number"
                    // value={+props.playerLevel}
                    onChange={(k) => props.setPlayerLevel(k.target.value)}
                  />
                </Col>
              </Row>
              <Row>
                <Col md={3} />
                <Col md={6}>
                  <Input
                    placeholder="Modifier"
                    className="text-center"
                    type="number"
                    value={props.modifier}
                    onChange={(s) => props.setModifier(s.target.value)}
                  />
                </Col>
              </Row>
              <Row>
                <Button>Submit</Button>
              </Row>
            </Card>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
