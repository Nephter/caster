import React from 'react';
import clericSeal from '../assets/img/ClericSeal.svg';
import bannerButton from '../assets/img/bannerButton.png';
import { Input, Card, CardTitle, Form, Button } from 'reactstrap';
import { domains } from '../Variables/Cleric/SpellDomains.js';
import ButtonDomain from './ButtonDomain.js';

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
        <Card className="" style={{ background: 'transparent' }} body>
          <CardTitle className=" d-flex mx-auto" style={{ fontSize: '2rem' }}>
            <div>
              <div className="pt-9">Cleric</div>
              <h1
                className="mx-auto"
                style={{
                  fontSize: '2rem',
                  minimumHeight: '2rem',
                  paddingLeft: '2px',
                }}
              >
                {props.domainIcon}
              </h1>
            </div>
          </CardTitle>
          <Input
            autoFocus
            placeholder="Cleric Level"
            className="text-center no-outline border-0 opacity-7 text-black w-50 mx-auto mb-1 mt-5"
            type="number"
            onChange={(k) => props.setPlayerLevel(k.target.value)}
            style={{ height: '32px' }}
          />
          <Input
            placeholder="Wisdom Modifier"
            className="text-center border-0 opacity-7 text-black w-50 mx-auto mb-1"
            type="number"
            value={props.modifier}
            onChange={(s) => props.setModifier(s.target.value)}
            style={{ height: '32px' }}
          />

          {domains.map((domainType, index) => {
            return (
              <ButtonDomain
                key={index}
                index={index}
                setDomainIcon={props.setDomainIcon}
                domainType={domainType}
                setDomain={props.setDomain}
              />
            );
          })}
          <Button
            disabled={props.domainIcon.type === 'img' ? true : false}
            type="submit"
            className="mx-auto py-1 btn-primary"
            style={{
              backgroundImage: `url(${bannerButton})`,
              backgroundSize: '100% 100%',
              backgroundColor: 'transparent',
              color: 'maroon',
              fontSize: '1rem',
              fontFamily: 'Patrick Hand SC, cursive',
              top: '1rem',
              border: 0,
              outline: 0,
              boxShadow: '0 0 0 0',
              transform: 'translate(0,-10px)',
            }}
          >
            <div className="px-5 mb-2">Enter</div>
          </Button>
        </Card>
      </Form>
    </div>
  );
};

export default Login;
