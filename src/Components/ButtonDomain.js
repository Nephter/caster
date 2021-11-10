import React from 'react';
import { Button } from 'reactstrap';
import { domains } from '../Variables/Cleric/SpellDomains.js';

const ButtonDomain = (props) => {
  var domainName = domains[props.index][0].domain;
  var domainIcon = domains[props.index][0].icon;

  const onClickHandler = () => {
    props.setDomainIcon(domains[props.index][0].icon);
    props.setDomain(domains[props.index]);
  };

  return (
    <div className="list-group w-25 mx-auto">
      <Button
        className="list-group-item p-0 m-0 buttonDomain"
        type="button"
        onClick={onClickHandler}
      >
        <span>{domainIcon}</span>
        <span>{domainName}</span>
      </Button>
    </div>
  );
};

export default ButtonDomain;
