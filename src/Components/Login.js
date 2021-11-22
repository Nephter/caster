import React from 'react';
import clericSeal from '../assets/img/ClericSeal.svg';
import ButtonBanner from '../assets/img/ButtonBanner.png';
import Button from '@mui/material/Button';
import { Input, Card, CardTitle, Form } from 'reactstrap';
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
  return (
    <div
      className="w-75 mx-auto"
      style={{
        backgroundImage: `url(${clericSeal})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        maxWidth: '517px',
        marginTop: '10vh',
      }}
    >
      <Form
        onSubmit={submitHandler}
        className="text-center d-flex justify-content-center"
      >
        <Card className="b-t" body>
          <CardTitle className="d-flex mx-auto" style={{ fontSize: '2rem' }}>
            <div>
              <div className="pt-9 primaryText">Cleric</div>
              <div className="mx-auto domainIcon pt-2">{props.domainIcon}</div>
            </div>
          </CardTitle>
          <Input
            autoFocus
            placeholder="Cleric Level"
            className="text-center border-0 opacity-7 text-black w-50 mx-auto mb-1 mt-5 "
            type="number"
            onChange={(k) => props.setPlayerLevel(k.target.value)}
            style={{ height: '2rem' }}
          />
          <Input
            placeholder="Wisdom Modifier"
            className="text-center border-0 opacity-7 text-black w-50 mx-auto mb-1"
            type="number"
            // value={props.modifier}
            onChange={(s) => props.setModifier(s.target.value)}
            style={{ height: '2rem' }}
          />
          {domains.map((domainType, index) => {
            return (
              <ButtonDomain
                key={index}
                index={index}
                domainType={domainType}
                setDomainIcon={props.setDomainIcon}
                setDomain={props.setDomain}
                channelDivinity={props.channelDivinity}
                setChannelDivinity={props.setChannelDivinity}
              />
            );
          })}
          <Button
            className="mx-auto pt-1 mb-2 buttonBanner"
            disabled={props.domainIcon.type === 'img' ? true : false}
            type="submit"
            style={{
              backgroundImage: `url(${ButtonBanner})`,
              fontFamily: 'Patrick Hand SC, cursive',
              opacity: `${props.domainIcon.type === 'img' ? '.6' : '1'}`,
              transform: 'translate(2px,-10px)',
            }}
          >
            <div className="px-5 mb-2 primaryText">Enter</div>
          </Button>
        </Card>
      </Form>
    </div>
  );
};

export default Login;
