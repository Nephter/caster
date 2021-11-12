import { Container, Label } from 'reactstrap';
import Button from '@mui/material/Button';
import ButtonBanner from '../assets/img/ButtonBanner.png';

const HeaderChooseSpells = (props) => {
  return (
    <Container fluid>
      <div className="header-body ">
        <Label for="spellsPreparable">
          {!props.table ? (
            props.spellsPreparable === 0 ? (
              <Button
                className="buttonBanner"
                size="small"
                onClick={props.onPrepareClick}
                style={{
                  backgroundImage: `url(${ButtonBanner})`,
                  fontFamily: 'Patrick Hand SC, cursive',
                }}
              >
                <div className="px-5 primaryText">Prepare!</div>
              </Button>
            ) : (
              <h1>
                Preparable: {props.spellsPreparable}/
                {+props.playerLevel + +props.modifier}
              </h1>
            )
          ) : (
            ''
          )}
        </Label>
      </div>
    </Container>
  );
};

export default HeaderChooseSpells;
