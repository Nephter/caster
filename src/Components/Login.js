import React from 'react';
import clericSeal from '../assets/img/cleric-seal.svg';
import bannerButton from '../assets/img/bannerButton.png';
import { Input, Card, CardTitle, CardText, Form } from 'reactstrap';
import Button from '@mui/material/Button';

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
    <div
      className="w-75 mx-auto"
      style={{
        backgroundImage: `url(${clericSeal})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Form
        onSubmit={submitHandler}
        className="text-center d-flex justify-content-center"
      >
        <Card className="mb-2" style={{ background: 'transparent' }} body>
          <CardTitle className="pt-9" tag="h1" style={{ fontSize: '2rem' }}>
            Cleric
          </CardTitle>
          <CardText tag="h5" className="pt-7 pb-2" style={{ color: 'maroon' }}>
            Keep track of your Cleric spell info
          </CardText>
          <Input
            autoFocus
            placeholder="Cleric Level"
            className="text-center no-outline border-0 opacity-7 text-black w-50 mx-auto "
            type="number"
            onChange={(k) => props.setPlayerLevel(k.target.value)}
          />
          <Input
            placeholder="Wisdom Modifier"
            className="text-center my-2 border-0 opacity-7 text-black w-50 mx-auto"
            type="number"
            value={props.modifier}
            onChange={(s) => props.setModifier(s.target.value)}
          />
          <Button
            type="submit"
            className=" mx-auto"
            style={{
              backgroundImage: `url(${bannerButton})`,
              backgroundSize: '100% 100%',
              backgroundColor: 'transparent',
              color: 'maroon',
              fontSize: '1rem',
              fontFamily: 'Patrick Hand SC, cursive',
              top: '1rem',
              border: 0,
            }}
          >
            <div className="px-5">Submit</div>
          </Button>
        </Card>
      </Form>
    </div>
  );
};

export default Login;
