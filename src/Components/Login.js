import React from 'react';
import parchment from '../assets/img/theme/parchment1.jpg';
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
    <Container className="py-5 w-50">
      <Form
        onSubmit={submitHandler}
        className="text-center d-flex justify-content-center align-content-center "
      >
        <Card
          className=""
          body
          style={{
            backgroundImage: `url(${parchment})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <CardTitle tag="h2">Character Info</CardTitle>
          <CardText tag="h5">Keep track of your Cleric spell info</CardText>
          <Row className="flex-direction-column justify-content-center align-items-center">
            <Col md={6}>
              <Input
                autoFocus
                placeholder="Cleric Level"
                className="text-center no-outline border-0 opacity-7 text-black "
                type="number"
                // value={+props.playerLevel}
                onChange={(k) => props.setPlayerLevel(k.target.value)}
              />
            </Col>
          </Row>
          <Row className="flex-direction-column justify-content-center align-items-center">
            <Col md={6}>
              <Input
                placeholder="Wisdom Modifier"
                className="text-center my-2 border-0 opacity-7 text-black"
                type="number"
                value={props.modifier}
                onChange={(s) => props.setModifier(s.target.value)}
              />
            </Col>
          </Row>
          <Row className="flex-direction-column justify-content-center align-items-center my-3">
            <Col md={6}>
              <Button className="opacity-7">Submit</Button>
            </Col>
          </Row>
        </Card>
      </Form>
    </Container>
  );
};

export default Login;

//  <Container>
//    <Row>
//      <Col md={4} />
//      <Col md={4}>
//        <Form
//          onSubmit={submitHandler}
//          className="text-center d-flex justify-content-center align-content-center "
//        >
//          <Card body color="">
//            <CardTitle tag="h4">Character Info</CardTitle>
//            <CardText>
//              As of right now, this is an app for tracking spell casts of a
//              Cleric.
//            </CardText>
//            <Row>
//              <Col md={3} />
//              <Col md={6}>
//                <Input
//                  autoFocus
//                  placeholder="Level"
//                  className="text-center"
//                  type="number"
//                  // value={+props.playerLevel}
//                  onChange={(k) => props.setPlayerLevel(k.target.value)}
//                />
//              </Col>
//            </Row>
//            <Row>
//              <Col md={3} />
//              <Col md={6}>
//                <Input
//                  placeholder="Modifier"
//                  className="text-center"
//                  type="number"
//                  value={props.modifier}
//                  onChange={(s) => props.setModifier(s.target.value)}
//                />
//              </Col>
//            </Row>
//            <Row>
//              <Button>Submit</Button>
//            </Row>
//          </Card>
//        </Form>
//      </Col>
//    </Row>
//  </Container>;
